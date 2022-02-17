import ClassOrDogButtonStyled from './ClassOrDogButtonStyled';
import { DOG_ACTIONS } from '../../Consts/reducersActions';
import { DogContext } from '../../Context/DogContext';
import InfoLabel from '../../Atoms/InfoLabel/InfoLabel';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const ClassOrDogButton = ({ classInfo, dogInfo, noInfoLabel }) => {
  const navigate = useNavigate();
  const { obedienceClass, dogsAmount, isCompleted } = classInfo || [];
  const { index, dogId, dogName, exercisesCompleted, exercisesAmount } =
    dogInfo || [];
  const { dogDispatch } = useContext(DogContext);
  console.log(isCompleted);

  const clickHandler = (event) => {
    event.preventDefault();
    classInfo &&
      navigate(`./${obedienceClass}`, {
        state: { text: 'Lista uczestników', label: `Klasa ${obedienceClass}` },
      });
    dogInfo &&
      noInfoLabel &&
      navigate(`../dog-data/${dogId}`, {
        state: { text: 'Dane psa', label: `${dogName}`, dogId: dogId },
      });
    dogInfo &&
      noInfoLabel &&
      dogDispatch({
        type: 'UPDATE_ONE_FIELD',
        fieldName: 'chosenDog',
        payload: { dogId: dogId, dogName: dogName },
      });
    dogInfo &&
      !noInfoLabel &&
      navigate(`./${dogId}`, {
        state: { text: 'Wyniki', label: `Oceny zawodnika ${dogName}` },
      });
    dogInfo &&
      !noInfoLabel &&
      dogDispatch({
        type: DOG_ACTIONS.UPDATE_ONE_FIELD,
        fieldName: 'chosenDog',
        payload: { dogId: dogId, dogName: dogName },
      });
  };

  return (
    <ClassOrDogButtonStyled onClick={clickHandler}>
      {/*CONDITIONAL FOR CLASSES */}
      {classInfo && <p>Klasa {obedienceClass}</p>}
      {classInfo && <InfoLabel classInfo={{ dogsAmount, isCompleted }} />}

      {/*CONDITIONAL FOR DOGS */}
      {dogInfo && (
        <p>
          {index + 1}. {dogName}
        </p>
      )}
      {dogInfo && !noInfoLabel && (
        <InfoLabel dogInfo={{ exercisesCompleted, exercisesAmount }} />
      )}
    </ClassOrDogButtonStyled>
  );
};

ClassOrDogButton.propTypes = {
  classInfo: PropTypes.shape({
    obedienceClass: PropTypes.string.isRequired,
    dogsAmount: PropTypes.number.isRequired,
    isCompleted: PropTypes.bool,
  }),
  dogInfo: PropTypes.shape({
    index: PropTypes.number.isRequired,
    dogId: PropTypes.string,
    dogName: PropTypes.string,
    exercisesCompleted: PropTypes.number,
    exercisesAmount: PropTypes.number,
  }),
  noInfoLabel: PropTypes.bool,
};

export default ClassOrDogButton;
