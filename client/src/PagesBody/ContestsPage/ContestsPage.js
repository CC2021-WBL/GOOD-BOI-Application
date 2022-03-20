import { useContext, useEffect, useRef, useState } from 'react';

import { CONTEST_ACTIONS } from '../../Consts/reducersActions';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ContestCard from '../../Molecules/ContestCard/ContestCard';
import { ContestContext } from '../../Context/ContestContext';
import ContestFilterToggler from '../../Organisms/ContestFilterHarmonica/ContestFilterToggler';
import ContestsWrapperStyled from './ContestsWrapperStyled';
import FilterLabel from '../../Molecules/FilterLabel/FilterLabel';
<<<<<<< HEAD
import { ROLE_NAME } from '../../Consts/rolesConsts';
import { TIME } from '../../Consts/infoLabelConsts';
=======
import Spinner from '../../Atoms/Spinner/Spinner';
>>>>>>> development
import { UserDataContext } from '../../Context/UserDataContext';
import { chooseAndSetSelectedMode } from '../../Tools/contestPageFunctions';
import { getContestsCards } from '../../Tools/FetchData/fetchContestsfunctions';
import { getSelectedContestsByTime } from '../../Tools/TimeFunctions';
import mockmap from '../../Assets/mockMAP.JPG';
import { removeNullsFromArray } from '../../Tools/FetchData/additionalToolsForResults';
import { useLocation } from 'react-router-dom';
import useMediaQuery from '../../Hooks/useMediaQuery';

const ContestsPage = () => {
  const rawDataFromDB = useRef(null);
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
<<<<<<< HEAD
    if (locationPath.state && locationPath.state.contestContent === 'results') {
      if (state.selectedRole === ROLE_NAME.MANAGER) {
        setContestData(
          resForContestPage.filter((contest) => {
            return contest.manager.includes(state.userId);
          }),
        );
      } else if (state.selectedRole === ROLE_NAME.PARTICIPANT) {
        setContestData(
          resForContestPage.filter((contest) => {
            return contest.participants.includes(state.userId);
          }),
        );
      }
      setSelectedMode(TIME.PRESENT_AND_PAST);
      setIsPending(false);
    } else if (
      locationPath.state &&
      locationPath.state.contestContent === 'future'
    ) {
      if (state.selectedRole === ROLE_NAME.MANAGER) {
        setContestData(
          resForContestPage.filter((contest) => {
            return contest.manager.includes(state.userId);
          }),
        );
      } else if (state.selectedRole === ROLE_NAME.PARTICIPANT) {
        setContestData(
          resForContestPage.filter((contest) => {
            return contest.participants.includes(state.userId);
          }),
        );
      }
      setSelectedMode(TIME.FUTURE);
      setIsPending(false);
    } else {
      setContestData(resForContestPage);
      setSelectedMode(TIME.UNKNOWN);
=======
    async function fetchContestsData() {
      let result = await getContestsCards(state, locationPath);

      if (Array.isArray(result)) {
        result = removeNullsFromArray(result);
      }
      rawDataFromDB.current = result;

      chooseAndSetSelectedMode(locationPath, setSelectedMode);
>>>>>>> development
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
          {isPending && <Spinner />}
          {isPending && <h3>Loading...</h3>}
          {rawDataFromDB.current &&
            getSelectedContestsByTime(selectedMode, rawDataFromDB.current).map(
              (contest) => (
                <ContestCard key={contest.contestId} contestData={contest} />
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
//make commit possible again
