import {
  getHourAndMinutesFromDate,
  getSelectedContestsByTime,
} from '../../Tools/TimeFunctions';
import { useEffect, useState } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ContestCard from '../../Molecules/ContestCard/ContestCard';
import ContestFilterToggler from '../../Organisms/ContestFilterHarmonica/ContestFilterToggler';
import FilterLabel from '../../Molecules/FilterLabel/FilterLabel';
import { TIME } from '../../Consts/infoLabelConsts';
import contests from '../../Data/MongoDBMock/contests';
import { getAmountOfCompetingDoggos } from '../../Tools/DataModifications';
import { useLocation } from 'react-router-dom';

const ContestsPage = () => {
  const [contestData, setContestData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [selectedContests, setSelectedContests] = useState();
  const locationPath = useLocation();

  // mock for getting data from DB
  useEffect(() => {
    let array = [];
    contests.forEach((element) => {
      const contestObject = {};
      contestObject.contestId = element.contestId;
      contestObject.contestName = element.contestName;
      contestObject.startDate = element.startDate;
      contestObject.endDate = element.endDate;
      contestObject.hour = getHourAndMinutesFromDate(element.startDate);
      contestObject.city = element.address.city.toUpperCase();
      contestObject.doggoAmount = getAmountOfCompetingDoggos(
        element.obedienceClasses,
      );
      array.push(contestObject);
    });
    setContestData(array);
    setSelectedContests(array);
  }, []);

  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };

  // handling different selections
  const clickPresent = (event) => {
    event.preventDefault();
    setSelectedContests(getSelectedContestsByTime(TIME.PRESENT, contestData));
  };
  const clickFuture = (event) => {
    event.preventDefault();
    setSelectedContests(getSelectedContestsByTime(TIME.FUTURE, contestData));
  };
  const clickPast = (event) => {
    event.preventDefault();
    setSelectedContests(getSelectedContestsByTime(TIME.PAST, contestData));
  };

  const clickAll = (event) => {
    event.preventDefault();
    setSelectedContests(getSelectedContestsByTime(TIME.UNKNOWN, contestData));
  };

  if (contestData.length === 0) {
    return (
      <ColumnWrapper>
        <h1>Nie ma zawodów</h1>
      </ColumnWrapper>
    );
  }

  return (
    <>
      {locationPath.pathname === '/contests' && (
        <ContestFilterToggler
          onClick={toggleHandler}
          toggle={toggle}
        ></ContestFilterToggler>
      )}
      {locationPath.pathname === '/contests' && toggle && (
        <FilterLabel
          clickFuture={clickFuture}
          clickPast={clickPast}
          clickPresent={clickPresent}
          clickAll={clickAll}
        ></FilterLabel>
      )}

      <ColumnWrapper paddingLeftRight={1} paddingTop={0.5}>
        {selectedContests.map((contest) => (
          <ContestCard key={contest.contestId} contestData={contest} />
        ))}
      </ColumnWrapper>
    </>
  );
};

export default ContestsPage;
