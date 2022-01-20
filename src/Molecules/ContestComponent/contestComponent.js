import RANDOM_CONTESTS from '../../Data/Dummy-data/test-data-random-contests';
import propTypes from 'prop-types';
import InfoLabel from '../../Atoms/InfoLabel/InfoLabel';
import {
  ContestComponentStyled,
  ContestNameStyled,
  ContestInsideElementStyled,
} from './ContestComponenyStyled';
import { getDataFormatDdMonthYyy } from '../../Tools/TimeFunctions';
import { useState, useEffect } from 'react';

// import { useNavigate } from 'react-router-dom';

const ContestComponent = ({ contestId, contestIndex }) => {
  const initialData = {
    contestName: 'info wkrótce',
    date: '',
    hour: '10:00',
    city: 'info wkrótce',
  };
  // to test navigation uncomment rest of commented code at that page
  const [isClicked, setIsClicked] = useState();
  const [contestData, setContestData] = useState(initialData);
  const { contestName, date, hour, city } = contestData;
  //  let navigate = useNavigate();

  useEffect(() => {
    // mock for fetch() from database
    setContestData({
      ...contestData,
      contestName: RANDOM_CONTESTS[contestIndex].name,
      date: getDataFormatDdMonthYyy(RANDOM_CONTESTS[contestIndex].date),
      city: RANDOM_CONTESTS[contestIndex].city.toUpperCase(),
    });
    console.log(contestId);
  }, []);

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
        <time dateTime={date}>
          {date}, {hour}
        </time>
        <p>{city}</p>
      </ContestInsideElementStyled>
      <ContestInsideElementStyled>
        <InfoLabel classInfo={{ dogsAmount: 30 }}></InfoLabel>
        <InfoLabel
          dateOfContest={RANDOM_CONTESTS[contestIndex].date}
        ></InfoLabel>
      </ContestInsideElementStyled>
    </ContestComponentStyled>
  );
};

ContestComponent.propTypes = {
  contestId: propTypes.string,
  contestDate: propTypes.instanceOf(Date),
  contestIndex: propTypes.number,
};

export default ContestComponent;
