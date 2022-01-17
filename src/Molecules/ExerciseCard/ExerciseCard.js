import PropTypes from 'prop-types';
import Exercise from '../../Atoms/Exercise/Exercise';
import Point from '../../Atoms/Point/Point';
import EditAccept from '../../Atoms/EditAccept/EditAccept';
import ExerciseCardStyled from './ExerciseCardStyled';
import { useState } from 'react';

const ExerciseCard = ({ exerciseName, points }) => {
  const [toggle, setToggle] = useState(true);

  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <ExerciseCardStyled>
      <Exercise exerciseName={exerciseName} toggle={toggle} />
      <Point points={points} toggle={toggle} />
      <EditAccept onClick={toggleHandler} toggle={toggle} />
    </ExerciseCardStyled>
  );
};

ExerciseCard.propTypes = {
  exerciseName: PropTypes.string,
  points: PropTypes.number,
  active: PropTypes.bool.isRequired,
};

export default ExerciseCard;
