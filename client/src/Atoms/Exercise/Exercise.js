import propTypes from 'prop-types';
import ExerciseStyled from './ExerciseStyled';
import PropTypes from 'prop-types';
import CLASSES from '../../Consts/classesConst';

const Exercise = ({ codeName, toggle }) => {
  const exerciseName = CLASSES[codeName.charAt(0)].exercises.find(
    (exercise) => exercise.codeName === codeName,
  ).exerciseName;

  return <ExerciseStyled toggle={toggle}>{exerciseName}</ExerciseStyled>;
};

Exercise.propTypes = {
  codeName: propTypes.string.isRequired,
  toggle: PropTypes.bool.isRequired,
};

export default Exercise;
