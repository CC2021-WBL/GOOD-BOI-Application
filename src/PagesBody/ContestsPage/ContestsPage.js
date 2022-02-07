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
  console.log(locationPath.state);

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
    console.log('useEffect');
    if (
      locationPath.state &&
      locationPath.state.contestsContent === 'results'
    ) {
      console.log('results');
      setSelectedContests(
        getSelectedContestsByTime(TIME.PRESENT_AND_PAST, contestData),
      );
    } else if (
      locationPath.state &&
      locationPath.state.contestsContent === 'future'
    ) {
      console.log('future');

      setSelectedContests(getSelectedContestsByTime(TIME.FUTURE, contestData));
    } else {
      console.log('else');
      setSelectedContests(array);
    }
  }, []);

  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };

  // handling different selections
  const handleFilterClick = (time, event) => {
    event.preventDefault;
    setSelectedContests(getSelectedContestsByTime(time, contestData));
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
      <ContestFilterToggler
        onClick={toggleHandler}
        toggle={toggle}
      ></ContestFilterToggler>

      {toggle && <FilterLabel onClick={handleFilterClick}></FilterLabel>}

      <ColumnWrapper paddingLeftRight={1} paddingTop={0.5}>
        {selectedContests.map((contest) => (
          <ContestCard key={contest.contestId} contestData={contest} />
        ))}
      </ColumnWrapper>
    </>
  );
};

export default ContestsPage;
