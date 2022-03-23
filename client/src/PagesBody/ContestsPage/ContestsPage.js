import { useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ContestCard from '../../Molecules/ContestCard/ContestCard';
import ContestFilterToggler from '../../Organisms/ContestFilterHarmonica/ContestFilterToggler';
import ContestsWrapperStyled from './ContestsWrapperStyled';
import FilterLabel from '../../Molecules/FilterLabel/FilterLabel';
import Spinner from '../../Atoms/Spinner/Spinner';
import mockmap from '../../Assets/mockMAP.JPG';
import useMediaQuery from '../../Hooks/useMediaQuery';
import { CONTEST_ACTIONS } from '../../Consts/reducersActions';
import { ContestContext } from '../../Context/ContestContext';
import { UserDataContext } from '../../Context/UserDataContext';
import { chooseAndSetSelectedMode } from '../../Tools/contestPageFunctions';
import { getContestsCards } from '../../Tools/FetchData/fetchContestsfunctions';
import { getSelectedContestsByTime } from '../../Tools/TimeFunctions';
import { removeNullsFromArray } from '../../Tools/FetchData/additionalToolsForResults';

const ContestsPage = () => {
  const rawDataFromDB = useRef(null);
  const [toggle, setToggle] = useState(false);
  const [selectedMode, setSelectedMode] = useState(null);
  const locationPath = useLocation();
  const [isPending, setIsPending] = useState(true);
  const { state } = useContext(UserDataContext);
  const { isAuthenticated } = state;
  const { contestState, contestDispatch } = useContext(ContestContext);

  useEffect(() => {
    if (contestState.contestId || contestState.contestName) {
      contestDispatch({ type: CONTEST_ACTIONS.CLEAR });
    }
  }, []);

  useEffect(() => {
    async function fetchContestsData() {
      let result = await getContestsCards(state, locationPath);

      if (Array.isArray(result)) {
        result = removeNullsFromArray(result);
      }
      rawDataFromDB.current = result;

      chooseAndSetSelectedMode(locationPath, setSelectedMode);
      setIsPending(false);
    }

    fetchContestsData();
  }, []);

  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };

  // handling different selections
  const handleFilterClick = (time, event) => {
    event.preventDefault();
    setSelectedMode(time);
  };

  return (
    <>
      {useMediaQuery('(max-width:799px)') && (
        <>
          <ContestFilterToggler onClick={toggleHandler} toggle={toggle} />{' '}
          {toggle && <FilterLabel onClick={handleFilterClick} />}{' '}
        </>
      )}
      <ContestsWrapperStyled
        className="contests"
        contentPosition={isAuthenticated}
      >
        <ColumnWrapper
          paddingLeftRight={1}
          paddingTop={0.5}
          className="contests-column-wrapper"
        >
          {useMediaQuery('(min-width:800px)') && <ContestFilterToggler />}

          {useMediaQuery('(min-width:800px)') && (
            <FilterLabel onClick={handleFilterClick} />
          )}
          {isPending && <Spinner />}
          {rawDataFromDB.current &&
            getSelectedContestsByTime(selectedMode, rawDataFromDB.current).map(
              (contest) => (
                <ContestCard key={contest._id} contestData={contest} />
              ),
            )}
          {rawDataFromDB.current &&
            getSelectedContestsByTime(selectedMode, rawDataFromDB.current)
              .length === 0 && <h3>Nie ma zawodów</h3>}
        </ColumnWrapper>

        <div className="mockmap">
          <img src={mockmap} alt="mockmap" />
        </div>
      </ContestsWrapperStyled>
    </>
  );
};

export default ContestsPage;
