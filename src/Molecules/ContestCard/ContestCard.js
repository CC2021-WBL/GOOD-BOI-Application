import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import InfoLabel from '../../Atoms/InfoLabel/InfoLabel';
import RANDOM_CONTESTS from '../../Data/Dummy-data/test-data-random-contests';
import setColorMotive from '../../Tools/ColorsSettingForInfoLabel';
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

const ContestCard = ({ contestId, contestIndex }) => {
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

  useEffect(() => {
    setContestData({
      ...contestData,
      contestName: RANDOM_CONTESTS[contestIndex].name,
      startDate: RANDOM_CONTESTS[contestIndex].date,
      endDate: RANDOM_CONTESTS[contestIndex].endDate,
      hour: getHourAndMinutesFromDate(RANDOM_CONTESTS[contestIndex].date),
      city: RANDOM_CONTESTS[contestIndex].city.toUpperCase(),
      doggoAmount: 30,
    });
    console.log(contestId);
  }, []);

  const stringDate = getDataFormatDdMonthYyy(startDate);
  const pointOnTimeLine = getPointOnTimeLine(startDate, endDate);
  console.log(pointOnTimeLine);

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
        ></InfoLabel>
        <InfoLabel
          pointOnTimeLine={pointOnTimeLine}
          colorMotive={setColorMotive(pointOnTimeLine)}
        ></InfoLabel>
      </ContestInsideElementStyled>
    </ContestCardStyled>
  );
};

ContestCard.propTypes = {
  contestId: propTypes.string.isRequired,
  contestIndex: propTypes.number,
};

export default ContestCard;
