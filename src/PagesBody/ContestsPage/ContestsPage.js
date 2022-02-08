/* eslint-disable no-unused-vars */

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
  const [contestData, setContestData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [selectedContests, setSelectedContests] = useState(null);
  const locationPath = useLocation();
  console.log(locationPath);

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
    console.log(contestData);
    // checking first time when rendered if there are any selectors from previous component
    // not working now - ready to use, connection as TODO with Tomek and Profile Page
    if (locationPath.state && locationPath.state.contestContent === 'results') {
      console.log(locationPath.state.contestContent);
      setSelectedContests(
        getSelectedContestsByTime(TIME.PRESENT_AND_PAST, contestData),
      );
    } else if (
      locationPath.state &&
      locationPath.state.contestContent === 'future'
    ) {
      console.log(locationPath.state.contestContent);
      setSelectedContests(getSelectedContestsByTime(TIME.FUTURE, contestData));
    } else {
      setSelectedContests(array);
    }
    console.log(selectedContests);
  }, []);

  useEffect(() => {
    getSelectedContestsByTime(contestData);
  }, [selectedMode]);

  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };

  // handling different selections
  const handleFilterClick = (time, event) => {
    event.preventDefault;
    setSelectedContests(getSelectedContestsByTime(time, contestData));
  };

  if (!contestData) {
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
        {selectedContests &&
          selectedContests.map((contest) => (
            <ContestCard key={contest.contestId} contestData={contest} />
          ))}
      </ColumnWrapper>
    </>
  );
};

export default ContestsPage;
