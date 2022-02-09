import CLASSES from '../../Consts/classesConst';
import ExerciseStyled from './ExerciseStyled';
import propTypes from 'prop-types';

const Exercise = ({ codeName, toggle }) => {
  const exerciseName = CLASSES[codeName.charAt(0)].exercises.find(
    (exercise) => exercise.codeName === codeName,
  ).exerciseName;

  return <ExerciseStyled toggle={toggle}>{exerciseName}</ExerciseStyled>;
};

Exercise.propTypes = {
  codeName: propTypes.string.isRequired,
  toggle: propTypes.bool.isRequired,
};

export default Exercise;
