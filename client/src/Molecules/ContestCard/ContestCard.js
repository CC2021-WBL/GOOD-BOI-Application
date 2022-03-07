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
import dog_1 from '../../Assets/Dogs/dog_1.png';
import dog_10 from '../../Assets/Dogs/dog_10.png';
import dog_11 from '../../Assets/Dogs/dog_11.png';
import dog_12 from '../../Assets/Dogs/dog_12.png';
import dog_2 from '../../Assets/Dogs/dog_2.png';
import dog_3 from '../../Assets/Dogs/dog_3.png';
import dog_4 from '../../Assets/Dogs/dog_4.png';
import dog_5 from '../../Assets/Dogs/dog_5.png';
import dog_6 from '../../Assets/Dogs/dog_6.png';
import dog_7 from '../../Assets/Dogs/dog_7.png';
import dog_8 from '../../Assets/Dogs/dog_8.png';
import dog_9 from '../../Assets/Dogs/dog_9.png';
import propTypes from 'prop-types';
import setColorMotive from '../../Tools/ColorsSettingForInfoLabel';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const ContestCard = ({ contestData }) => {
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
  const dogsImages = [
    dog_1,
    dog_2,
    dog_3,
    dog_4,
    dog_5,
    dog_6,
    dog_7,
    dog_8,
    dog_9,
    dog_10,
    dog_11,
    dog_12,
  ];
  let randomDogImage = Math.floor(Math.random() * dogsImages.length);
  return (
    <>
      <ContestCardStyled
        colorMotive={setColorMotive(pointOnTimeLine)}
        onClick={handleClick}
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
          {pointOnTimeLine === 'nadchodzący' && <p className="contest-action">zapisz się</p>}
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
};

export default ContestCard;
