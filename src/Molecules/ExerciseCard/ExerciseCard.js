import PropTypes from 'prop-types';
import Exercise from '../../Atoms/Exercise/Exercise';
import Point from '../../Atoms/Point/Point';
import EditAccept from '../../Atoms/EditAccept/EditAccept';
import ExerciseCardStyled from './ExerciseCardStyled';
import { useState } from 'react';

const ExerciseCard = ({ exerciseInfo, obedienceClassName }) => {
  const { codeName, result } = exerciseInfo;
  const [toggle, setToggle] = useState(true);

  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <ExerciseCardStyled>
      <Exercise
        codeName={codeName}
        obedienceClassName={obedienceClassName}
        toggle={toggle}
      />
      <Point points={result} toggle={toggle} />
      <EditAccept onClick={toggleHandler} toggle={toggle} />
    </ExerciseCardStyled>
  );
};

ExerciseCard.propTypes = {
  exerciseName: PropTypes.string,
  obedienceClassName: PropTypes.string,
  points: PropTypes.number,
  exerciseInfo: PropTypes.object,
};

export default ExerciseCard;
