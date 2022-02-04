import CLASSES from '../../Consts/CLASSES';
import ExerciseStyled from './ExerciseStyled';
import PropTypes from 'prop-types';
import propTypes from 'prop-types';

const Exercise = ({ codeName, obedienceClassName, toggle }) => {
  const classObj = CLASSES.find(
    (classObj) => classObj.name === obedienceClassName,
  );

  const exercisesArr = classObj.exercises;

  const exerciseName = exercisesArr.find(
    (exercise) => exercise.codeName === codeName,
  ).exerciseName;

  return <ExerciseStyled toggle={toggle}>{exerciseName}</ExerciseStyled>;
};

Exercise.propTypes = {
  codeName: propTypes.string,
  obedienceClassName: propTypes.number,
  toggle: PropTypes.bool,
};

export default Exercise;
