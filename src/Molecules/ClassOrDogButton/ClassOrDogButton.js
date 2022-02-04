import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import ClassOrDogButtonStyled from './ClassOrDogButtonStyled';
import InfoLabel from '../../Atoms/InfoLabel/InfoLabel';

const ClassOrDogButton = ({ classInfo, dogInfo }) => {
  const navigate = useNavigate();
  const { obedienceClass, dogsAmount } = classInfo || [];
  const { index, dogId, dogName, exercisesCompleted, exercisesAmount } =
    dogInfo || [];

  //CHECK IF CLASS IS COMPLETE
  // TODO (there must be some good way to check if all exercises for all dogs are completed)
  const isCompleted = false;

  const clickHandler = (event) => {
    event.preventDefault();
    classInfo &&
      navigate(`./${obedienceClass}`, {
        state: { text: 'Lista uczestników', label: `Klasa ${obedienceClass}` },
      });
    dogInfo &&
      navigate(`./${dogId}`, {
        state: { text: 'Wyniki', label: `Oceny zawodnika ${dogName}` },
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
      {dogInfo && (
        <InfoLabel dogInfo={{ exercisesCompleted, exercisesAmount }} />
      )}
    </ClassOrDogButtonStyled>
  );
};

ClassOrDogButton.propTypes = {
  classInfo: PropTypes.shape({
    obedienceClass: PropTypes.string.isRequired,
    dogsAmount: PropTypes.number.isRequired,
  }),
  dogInfo: PropTypes.shape({
    index: PropTypes.number.isRequired,
    dogId: PropTypes.string.isRequired,
    dogName: PropTypes.string.isRequired,
    exercisesCompleted: PropTypes.number.isRequired,
    exercisesAmount: PropTypes.number.isRequired,
  }),
};

export default ClassOrDogButton;
