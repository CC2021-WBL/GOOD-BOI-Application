import { useContext, useEffect, useRef, useState } from 'react';

import { CONTEST_ACTIONS } from '../../Consts/reducersActions';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ContestCard from '../../Molecules/ContestCard/ContestCard';
import { ContestContext } from '../../Context/ContestContext';
import ContestFilterToggler from '../../Organisms/ContestFilterHarmonica/ContestFilterToggler';
import FilterLabel from '../../Molecules/FilterLabel/FilterLabel';
import { TIME } from '../../Consts/infoLabelConsts';
import { UserDataContext } from '../../Context/UserDataContext';
import { getSelectedContestsByTime } from '../../Tools/TimeFunctions';
import { requestOptionsGET } from '../../FetchData/requestOptions';
import { useLocation } from 'react-router-dom';

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
      const response = await fetch(
        '/api/contests/card/data',
        requestOptionsGET,
      );
      const result = await response.json();
      rawDataFromDB.current = result;

      if (
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
              <ContestCard key={contest._id} contestData={contest} />
            ),
          )}
        {contestData &&
          getSelectedContestsByTime(selectedMode, contestData).length === 0 && (
            <h3>Nie ma zawodów</h3>
          )}
      </ColumnWrapper>
    </>
  );
};

export default ContestsPage;
