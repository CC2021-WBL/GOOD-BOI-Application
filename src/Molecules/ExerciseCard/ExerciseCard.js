import EditAccept from '../../Atoms/EditAccept/EditAccept';
import Exercise from '../../Atoms/Exercise/Exercise';
import ExerciseCardStyled from './ExerciseCardStyled';
import Points from '../Points/Points';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ExerciseCard = ({ exerciseInfo, onChange }) => {
  const [toggle, setToggle] = useState(true);

  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <ExerciseCardStyled>
      <Exercise codeName={exerciseInfo.codeName} toggle={toggle} />
      <Points exerciseInfo={exerciseInfo} toggle={toggle} onChange={onChange} />
      <EditAccept onClick={toggleHandler} toggle={toggle} />
    </ExerciseCardStyled>
  );
};

ExerciseCard.propTypes = {
  exerciseInfo: PropTypes.shape({
    codeName: PropTypes.string.isRequired,
    result: PropTypes.number,
  }),
  onChange: PropTypes.func.isRequired,
};

export default ExerciseCard;
