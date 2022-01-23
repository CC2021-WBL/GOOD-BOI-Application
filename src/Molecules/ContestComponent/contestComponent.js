import RANDOM_CONTESTS from '../../Data/Dummy-data/test-data-random-contests';
import propTypes from 'prop-types';
import InfoLabel from '../../Atoms/InfoLabel/InfoLabel';
import {
  ContestComponentStyled,
  ContestNameStyled,
  ContestInsideElementStyled,
} from './ContestComponentStyled';
import {
  getDataFormatDdMonthYyy,
  getHourAndMinutesFromDate,
} from '../../Tools/TimeFunctions';
import { useState, useEffect } from 'react';

// import { useNavigate } from 'react-router-dom';

const ContestComponent = ({ contestId, contestIndex }) => {
  const initialData = {
    contestName: 'info wkrótce',
    startDate: new Date(),
    endDate: new Date(),
    hour: '',
    city: 'info wkrótce',
  };
  // to test navigation uncomment rest of commented code at that page
  const [isClicked, setIsClicked] = useState();
  const [contestData, setContestData] = useState(initialData);
  const { contestName, startDate, endDate, hour, city } = contestData;
  //  let navigate = useNavigate();

  useEffect(() => {
    // mock for fetch() from database
    setContestData({
      ...contestData,
      contestName: RANDOM_CONTESTS[contestIndex].name,
      startDate: RANDOM_CONTESTS[contestIndex].date,
      endDate: RANDOM_CONTESTS[contestIndex].endDate,
      hour: getHourAndMinutesFromDate(RANDOM_CONTESTS[contestIndex].date),
      city: RANDOM_CONTESTS[contestIndex].city.toUpperCase(),
    });
    console.log(contestId);
  }, []);

  const stringDate = getDataFormatDdMonthYyy(startDate);

  const handleClick = (event) => {
    event.preventDefault();
    setIsClicked((isClicked) => !isClicked);
    // navigate(`./${contestId}/classes`);
    //navigate musi przekazać dane o klasach jakie mają się odbyć i nazwach psów w tych klasach?
  };

  return (
    <ContestComponentStyled isClicked={isClicked} onClick={handleClick}>
      <ContestNameStyled>{contestName}</ContestNameStyled>
      <ContestInsideElementStyled isClicked={isClicked}>
        <time dateTime={stringDate}>
          {stringDate}, {hour}
        </time>
        <p>{city}</p>
      </ContestInsideElementStyled>
      <ContestInsideElementStyled>
        <InfoLabel
          classInfo={{ dogsAmount: 30 }}
          endDateOfContest={endDate}
          startDateOfContest={startDate}
        ></InfoLabel>
        <InfoLabel
          startDateOfContest={startDate}
          endDateOfContest={endDate}
        ></InfoLabel>
      </ContestInsideElementStyled>
    </ContestComponentStyled>
  );
};

ContestComponent.propTypes = {
  contestId: propTypes.string.isRequired,
  contestDate: propTypes.instanceOf(Date),
  contestIndex: propTypes.number,
};

export default ContestComponent;
