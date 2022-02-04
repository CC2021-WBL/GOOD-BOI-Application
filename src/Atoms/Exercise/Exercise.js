import CLASSES from '../../Consts/CLASSES';
import ExerciseStyled from './ExerciseStyled';
import PropTypes from 'prop-types';
import propTypes from 'prop-types';

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
