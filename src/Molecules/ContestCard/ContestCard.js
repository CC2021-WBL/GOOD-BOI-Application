import {
  ContestCardStyled,
  ContestInsideElementStyled,
  ContestNameStyled,
} from './ContestCardStyled';
import {
  getDataFormatDdMonthYyy,
  getHourAndMinutesFromDate,
  getPointOnTimeLine,
} from '../../Tools/TimeFunctions';
import { useEffect, useState } from 'react';
import InfoLabel from '../../Atoms/InfoLabel/InfoLabel';
import propTypes from 'prop-types';
import setColorMotive from '../../Tools/ColorsSettingForInfoLabel';
import { useNavigate } from 'react-router-dom';
import contests from '../../Data/MongoDBMock/contests';

const ContestCard = ({ contestId }) => {
  const initialData = {
    contestName: 'info wkrótce',
    startDate: new Date(),
    endDate: new Date(),
    hour: '',
    city: 'info wkrótce',
    doggoAmount: 0,
  };
  const [contestData, setContestData] = useState(initialData);

  const { contestName, startDate, endDate, hour, city, doggoAmount } =
    contestData;
  let navigate = useNavigate();

  const contest = contests.find((contest) => contest.contestId === contestId);

  useEffect(() => {
    setContestData({
      ...contestData,
      contestName: contest.contestName,
      startDate: contest.startDate,
      endDate: contest.endDate,
      hour: getHourAndMinutesFromDate(contest.startDate),
      city: contest.address.city.toUpperCase(),
      doggoAmount: Object.keys(contest.obedienceClasses)
        .map((key) => contest.obedienceClasses[key].length)
        .reduce((a, b) => a + b),
    });
  }, []);

  const stringDate = getDataFormatDdMonthYyy(startDate);
  const pointOnTimeLine = getPointOnTimeLine(startDate, endDate);

  const handleClick = (event) => {
    event.preventDefault();
    navigate(`./${contestId}/classes`, {
      state: { text: 'Lista klas', label: `${contestName}` },
    });
    //navigate musi przekazać dane o klasach jakie mają się odbyć i nazwach psów w tych klasach?
  };

  return (
    <ContestCardStyled
      colorMotive={setColorMotive(pointOnTimeLine)}
      onClick={handleClick}
    >
      <ContestNameStyled>{contestName}</ContestNameStyled>
      <ContestInsideElementStyled colorMotive={setColorMotive(pointOnTimeLine)}>
        <time dateTime={stringDate}>
          {stringDate}, {hour}
        </time>
        <p>{city}</p>
      </ContestInsideElementStyled>
      <ContestInsideElementStyled colorMotive={setColorMotive(pointOnTimeLine)}>
        <InfoLabel
          classInfo={{ dogsAmount: doggoAmount }}
          colorMotive={setColorMotive(pointOnTimeLine, doggoAmount)}
        />
        <InfoLabel
          pointOnTimeLine={pointOnTimeLine}
          colorMotive={setColorMotive(pointOnTimeLine)}
        />
      </ContestInsideElementStyled>
    </ContestCardStyled>
  );
};

ContestCard.propTypes = {
  contestId: propTypes.string.isRequired,
};

export default ContestCard;
