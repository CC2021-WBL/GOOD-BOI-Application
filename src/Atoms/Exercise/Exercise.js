import propTypes from 'prop-types';
import ExerciseStyled from './ExerciseStyled';
import PropTypes from 'prop-types';
import CLASSES from '../../Data/Dummy-data/test-data-classes';

const Exercise = ({ codeName, obedienceClassName, toggle }) => {
  //We must change codeName (in the future maybe we use ID) to exerciseName of our exercise
  const exerciseName = CLASSES.find(
    (obedienceClass) => obedienceClass.name === obedienceClassName,
  ).exercises.find((exercise) => exercise.codeName === codeName).name;

  return <ExerciseStyled toggle={toggle}>{exerciseName}</ExerciseStyled>;
};

Exercise.propTypes = {
  codeName: propTypes.string,
  obedienceClassName: propTypes.string,
  toggle: PropTypes.bool,
};

export default Exercise;
