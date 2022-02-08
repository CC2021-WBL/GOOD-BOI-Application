import {
  ContestCardStyled,
  ContestInsideElementStyled,
  ContestNameStyled,
} from './ContestCardStyled';
import {
  getDataFormatDdMonthYyy,
  getPointOnTimeLine,
} from '../../Tools/TimeFunctions';
import { useLocation, useNavigate } from 'react-router-dom';

import { ContestContext } from '../../Context/ContestContext';
import InfoLabel from '../../Atoms/InfoLabel/InfoLabel';
import { UserDataContext } from '../../Context/UserDataContext';
import propTypes from 'prop-types';
import setColorMotive from '../../Tools/ColorsSettingForInfoLabel';
import { useContext } from 'react';

const ContestCard = ({ contestData }) => {
  const { contestDispatch } = useContext(ContestContext);
  const { state } = useContext(UserDataContext);
  const { roles } = state;

  let navigate = useNavigate();
  const locationPath = useLocation();

  const {
    contestId,
    contestName,
    startDate,
    endDate,
    hour,
    city,
    doggoAmount,
  } = contestData;

  const stringDate = getDataFormatDdMonthYyy(startDate);
  const pointOnTimeLine = getPointOnTimeLine(startDate, endDate);

  const handleClick = (event) => {
    event.preventDefault();
    if (
      roles !== null &&
      roles.includes('staff') &&
      locationPath.pathname === '/contests'
    ) {
      navigate(`./${contestId}/classes`, {
        state: { text: 'Lista klas', label: `${contestName}` },
      });
    } else {
      navigate(`/contests/${contestId}`, {
        state: { text: 'Konkurs', label: `${contestName}` },
      });
    }
    contestDispatch({
      type: 'SET_CONTEST',
      payload: {
        contestId: contestId,
        contestName: contestName,
      },
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
  contestData: propTypes.shape({
    contestId: propTypes.string,
    contestName: propTypes.string,
    startDate: propTypes.instanceOf(Date),
    endDate: propTypes.instanceOf(Date),
    hour: propTypes.string,
    city: propTypes.string,
    doggoAmount: propTypes.number,
  }),
};

export default ContestCard;
