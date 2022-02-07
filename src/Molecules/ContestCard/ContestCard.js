/* eslint-disable no-unused-vars */

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
import { useContext, useEffect, useState } from 'react';

import { ContestContext } from '../../Context/ContestContext';
import InfoLabel from '../../Atoms/InfoLabel/InfoLabel';
import contests from '../../Data/MongoDBMock/contests';
import propTypes from 'prop-types';
import setColorMotive from '../../Tools/ColorsSettingForInfoLabel';
import { useNavigate } from 'react-router-dom';

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
  const { state, dispatch } = useContext(ContestContext);

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
    dispatch({
      type: 'SET_CONTEST',
      payload: {
        contestId: contestId,
        contestName: contestName,
      },
    });
    navigate(`./${contestId}/classes`, {
      state: { text: 'Lista klas', label: `${contestName}` },
    });
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
