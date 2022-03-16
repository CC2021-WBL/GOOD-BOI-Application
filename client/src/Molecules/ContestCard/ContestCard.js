import propTypes from 'prop-types';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import InfoLabel from '../../Atoms/InfoLabel/InfoLabel';
import dogsImages from '../../Assets/Dogs/dogsImages';
import setColorMotive from '../../Tools/ColorsSettingForInfoLabel';
import {
  ContestCardStyled,
  ContestInsideElementStyled,
  ContestNameStyled,
} from './ContestCardStyled';
import { ContestContext } from '../../Context/ContestContext';
import { UserDataContext } from '../../Context/UserDataContext';
import {
  getDataFormatDdMonthYyy,
  getHourAndMinutesFromDate,
  getPointOnTimeLine,
} from '../../Tools/TimeFunctions';

const ContestCard = ({ contestData, className }) => {
  const { contestDispatch } = useContext(ContestContext);
  const { state } = useContext(UserDataContext);
  const { selectedRole } = state;

  let navigate = useNavigate();

  const { contestId, contestName, startDate, endDate, address, dogsAmount } =
    contestData;

  const stringDate = getDataFormatDdMonthYyy(startDate);
  const pointOnTimeLine = getPointOnTimeLine(startDate, endDate);

  const handleClick = (event) => {
    event.preventDefault();
    if (pointOnTimeLine === 'archiwalny') {
      navigate(`../class-choice`);
    } else if (selectedRole !== null && selectedRole === 'staff') {
      navigate(`./${contestId}/classes`);
    } else if (pointOnTimeLine === 'w trakcie') {
      navigate(`../class-choice`);
    } else {
      navigate(`/contests/${contestId}`);
    }
    contestDispatch({
      type: 'SET_CONTEST',
      payload: {
        contestId: contestId,
        contestName: contestName,
      },
    });
  };

  let randomDogImage = Math.floor(Math.random() * dogsImages.length);
  return (
    <>
      <ContestCardStyled
        colorMotive={setColorMotive(pointOnTimeLine)}
        onClick={handleClick}
        className={className}
      >
        <div className="contest-card-wrapper">
          <ContestNameStyled>{contestName}</ContestNameStyled>
          <ContestInsideElementStyled
            colorMotive={setColorMotive(pointOnTimeLine)}
          >
            <time dateTime={stringDate}>
              {stringDate}, {getHourAndMinutesFromDate(startDate)}
            </time>
            <p>{address.city.toUpperCase()}</p>
          </ContestInsideElementStyled>

          <ContestInsideElementStyled
            colorMotive={setColorMotive(pointOnTimeLine)}
          >
            <InfoLabel
              classInfo={{ dogsAmount: dogsAmount }}
              colorMotive={setColorMotive(pointOnTimeLine, dogsAmount)}
            />
            <InfoLabel
              pointOnTimeLine={pointOnTimeLine}
              colorMotive={setColorMotive(pointOnTimeLine)}
            />
          </ContestInsideElementStyled>
          {pointOnTimeLine === 'archiwalny' && (
            <p className="contest-action">zobacz wyniki</p>
          )}
          {pointOnTimeLine === 'nadchodzący' && (
            <p className="contest-action">zapisz się</p>
          )}
        </div>

        <div className="doggo-image">
          <img src={dogsImages[randomDogImage]} alt="Cute doggo" />
        </div>
      </ContestCardStyled>
    </>
  );
};

ContestCard.propTypes = {
  contestData: propTypes.shape({
    contestId: propTypes.string,
    contestName: propTypes.string,
    startDate: propTypes.instanceOf(Date),
    endDate: propTypes.instanceOf(Date),
    address: propTypes.object,
    dogsAmount: propTypes.number,
  }),
  className:propTypes.string,
};

export default ContestCard;
