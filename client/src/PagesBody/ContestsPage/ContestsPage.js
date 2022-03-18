import { useContext, useEffect, useRef, useState } from 'react';

import { CONTEST_ACTIONS } from '../../Consts/reducersActions';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ContestCard from '../../Molecules/ContestCard/ContestCard';
import { ContestContext } from '../../Context/ContestContext';
import ContestFilterToggler from '../../Organisms/ContestFilterHarmonica/ContestFilterToggler';
import ContestsWrapperStyled from './ContestsWrapperStyled';
import FilterLabel from '../../Molecules/FilterLabel/FilterLabel';
import { ROLE_NAME } from '../../Consts/rolesConsts';
import { TIME } from '../../Consts/infoLabelConsts';
import { UserDataContext } from '../../Context/UserDataContext';
import { getContestsCards } from '../../Tools/FetchData/fetchContestsfunctions';
import { getSelectedContestsByTime } from '../../Tools/TimeFunctions';
import mockmap from '../../Assets/mockMAP.JPG';
import { requestOptionsGET } from '../../Tools/FetchData/requestOptions';
import { useLocation } from 'react-router-dom';
import useMediaQuery from '../../Hooks/useMediaQuery';

const ContestsPage = () => {
  const rawDataFromDB = useRef(null);
  const [contestData, setContestData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [selectedMode, setSelectedMode] = useState(null);
  const locationPath = useLocation();
  const [isPending, setIsPending] = useState(true);
  const { state } = useContext(UserDataContext);
  const { contestState, contestDispatch } = useContext(ContestContext);

  useEffect(() => {
    if (contestState.contestId || contestState.contestName) {
      contestDispatch({ type: CONTEST_ACTIONS.CLEAR });
    }
  }, []);

  useEffect(() => {
    async function fetchContestsData() {
      if (state.selectedRole === ROLE_NAME.PARTICIPANT) {
        const result = await getContestsCards(ROLE_NAME.PARTICIPANT);
        console.log(result);
        rawDataFromDB.current = result;
      } else {
        const result = await getContestsCards();
        rawDataFromDB.current = result;
      }
      console.log(rawDataFromDB.current);

      if ((rawDataFromDB.current = null)) {
        setIsPending(false);
      } else if (
        locationPath.state &&
        locationPath.state.contestContent === 'results'
      ) {
        setContestData(
          rawDataFromDB.current.filter((contest) => {
            return contest.participants.includes(state.userId);
          }),
        );
        setSelectedMode(TIME.PRESENT_AND_PAST);
        setIsPending(false);
      } else if (
        locationPath.state &&
        locationPath.state.contestContent === 'future'
      ) {
        setContestData(rawDataFromDB.current);
        setSelectedMode(TIME.FUTURE);
        setIsPending(false);
      } else {
        setContestData(rawDataFromDB.current);
        setSelectedMode(TIME.UNKNOWN);
        setIsPending(false);
      }
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
    console.log(rawDataFromDB.current);
  };

  return (
    <>
      {useMediaQuery('(max-width:799px)') && (
        <>
          <ContestFilterToggler onClick={toggleHandler} toggle={toggle} />{' '}
          {toggle && <FilterLabel onClick={handleFilterClick} />}{' '}
        </>
      )}
      <ContestsWrapperStyled className="contests">
        <ColumnWrapper
          paddingLeftRight={1}
          paddingTop={0.5}
          className="contests-column-wrapper"
        >
          {useMediaQuery('(min-width:800px)') && <ContestFilterToggler />}

          {useMediaQuery('(min-width:800px)') && (
            <FilterLabel onClick={handleFilterClick} />
          )}
          {isPending && <h3>Loading...</h3>}
          {contestData &&
            getSelectedContestsByTime(selectedMode, contestData).map(
              (contest) => (
                <ContestCard key={contest.contestId} contestData={contest} />
              ),
            )}
          {contestData &&
            getSelectedContestsByTime(selectedMode, contestData).length ===
              0 && <h3>Nie ma zawodów</h3>}
        </ColumnWrapper>

        <div className="mockmap">
          <img src={mockmap} alt="mockmap" />
        </div>
      </ContestsWrapperStyled>
    </>
  );
};

export default ContestsPage;
