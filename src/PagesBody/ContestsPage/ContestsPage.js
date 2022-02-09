import { useContext, useEffect, useState } from 'react';

import { CONTEST_ACTIONS } from '../../Consts/reducersActions';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ContestCard from '../../Molecules/ContestCard/ContestCard';
import { ContestContext } from '../../Context/ContestContext';
import ContestFilterToggler from '../../Organisms/ContestFilterHarmonica/ContestFilterToggler';
import FilterLabel from '../../Molecules/FilterLabel/FilterLabel';
import { TIME } from '../../Consts/infoLabelConsts';
import { UserDataContext } from '../../Context/UserDataContext';
import { getSelectedContestsByTime } from '../../Tools/TimeFunctions';
import resForContestPage from '../../Data/MongoDBMock/responseFromContestsToContestsPage';
import { useLocation } from 'react-router-dom';

const ContestsPage = () => {
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

  // mock for getting data from DB for current user (with mock result for request api/contests?userId=matylda1234)
  useEffect(() => {
    if (locationPath.state && locationPath.state.contestContent === 'results') {
      console.log('Will be selected by ' + state.userId); //is left intentionally
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
    event.preventDefault;
    setSelectedMode(time);
    console.log(contestData);
  };

  return (
    <>
      <ContestFilterToggler
        onClick={toggleHandler}
        toggle={toggle}
      ></ContestFilterToggler>

      {toggle && <FilterLabel onClick={handleFilterClick}></FilterLabel>}

      <ColumnWrapper paddingLeftRight={1} paddingTop={0.5}>
        {isPending && <h3>Loading...</h3>}
        {contestData &&
          getSelectedContestsByTime(selectedMode, contestData).map(
            (contest) => (
              <ContestCard key={contest.contestId} contestData={contest} />
            ),
          )}
        {contestData &&
          getSelectedContestsByTime(selectedMode, contestData).length === 0 && (
            <h3>Nie ma konkursów</h3>
          )}
      </ColumnWrapper>
    </>
  );
};

export default ContestsPage;
