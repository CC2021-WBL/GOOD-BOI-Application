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

import { ContestContext } from '../../Context/ContestContext';
import InfoLabel from '../../Atoms/InfoLabel/InfoLabel';
import { UserDataContext } from '../../Context/UserDataContext';
import propTypes from 'prop-types';
import setColorMotive from '../../Tools/ColorsSettingForInfoLabel';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const ContestCard = ({ contestData }) => {
  const { contestDispatch } = useContext(ContestContext);
  const { state } = useContext(UserDataContext);
  const { selectedRole } = state;

  let navigate = useNavigate();

  const {
    _id,
    contestName,
    startDate,
    endDate,
    address,
    amountOfApplications,
  } = contestData;

  const stringDate = getDataFormatDdMonthYyy(startDate);
  const pointOnTimeLine = getPointOnTimeLine(startDate, endDate);

  const handleClick = (event) => {
    event.preventDefault();
    if (pointOnTimeLine === 'archiwalny') {
      navigate(`../class-choice`);
    } else if (selectedRole !== null && selectedRole === 'staff') {
      navigate(`./${_id}/classes`);
    } else {
      navigate(`/contests/${_id}`);
    }
    contestDispatch({
      type: 'SET_CONTEST',
      payload: {
        contestId: _id,
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
          {stringDate}, {getHourAndMinutesFromDate(startDate)}
        </time>
        <p>
          {address.city ? address.city.toUpperCase() : 'LOKALIZACJA WKRÓTCE'}
        </p>
      </ContestInsideElementStyled>
      <ContestInsideElementStyled colorMotive={setColorMotive(pointOnTimeLine)}>
        <InfoLabel
          classInfo={{ dogsAmount: amountOfApplications }}
          colorMotive={setColorMotive(pointOnTimeLine, amountOfApplications)}
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
    startDate: propTypes.string,
    endDate: propTypes.string,
    address: propTypes.object,
    dogsAmount: propTypes.number,
  }),
};

export default ContestCard;
