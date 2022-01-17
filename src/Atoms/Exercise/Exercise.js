import propTypes from 'prop-types';
import ExerciseStyled from './ExerciseStyled';
import PropTypes from 'prop-types';

const Exercise = ({ exerciseName, toggle }) => {
  return <ExerciseStyled toggle={toggle}>{exerciseName}</ExerciseStyled>;
};

Exercise.propTypes = {
  exerciseName: propTypes.string,
  toggle: PropTypes.bool,
};

export default Exercise;
