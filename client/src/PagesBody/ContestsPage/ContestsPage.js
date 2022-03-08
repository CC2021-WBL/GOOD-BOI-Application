import { useContext, useEffect, useRef, useState } from 'react';

import { CONTEST_ACTIONS } from '../../Consts/reducersActions';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ContestCard from '../../Molecules/ContestCard/ContestCard';
import { ContestContext } from '../../Context/ContestContext';
import ContestFilterToggler from '../../Organisms/ContestFilterHarmonica/ContestFilterToggler';
import ContestsWrapperStyled from './ContestsWrapperStyled';
import FilterLabel from '../../Molecules/FilterLabel/FilterLabel';
import { TIME } from '../../Consts/infoLabelConsts';
import { UserDataContext } from '../../Context/UserDataContext';
import { getSelectedContestsByTime } from '../../Tools/TimeFunctions';
import mockmap from '../../Assets/mockmap.png';
import { requestOptionsGET } from '../../FetchData/requestOptions';
import resForContestPage from '../../Data/MongoDBMock/responseFromContestsToContestsPage';
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
    fetch('/api/contests/?taker=card', requestOptionsGET)
      .then((response) => response.json())
      .then((result) => {
        rawDataFromDB.current = result;
        console.log(rawDataFromDB.current);
      })
      .catch((error) => console.log('error', error));

    if (locationPath.state && locationPath.state.contestContent === 'results') {
      setContestData(
        resForContestPage.filter((contest) => {
          return contest.participants.includes(state.userId);
        }),
      );
      setSelectedMode(TIME.PRESENT_AND_PAST);
      setIsPending(false);
    } else if (
      locationPath.state &&
      locationPath.state.contestContent === 'future'
    ) {
      setContestData(resForContestPage);
      setSelectedMode(TIME.FUTURE);
      setIsPending(false);
    } else {
      setContestData(resForContestPage);
      setSelectedMode(TIME.UNKNOWN);
      setIsPending(false);
    }
  }, []);

  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };

  // handling different selections
  const handleFilterClick = (time, event) => {
    event.preventDefault();
    setSelectedMode(time);
    console.log(contestData);
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
