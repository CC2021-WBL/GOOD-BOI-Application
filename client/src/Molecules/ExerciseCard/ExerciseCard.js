import PropTypes from 'prop-types';
import { useState } from 'react';

import EditAccept from '../../Atoms/EditAccept/EditAccept';
import Exercise from '../../Atoms/Exercise/Exercise';
import ExerciseCardStyled from './ExerciseCardStyled';
import Points from '../Points/Points';

const ExerciseCard = ({ exerciseInfo, onChange, saveDataHandler }) => {
  const [isEditMode, setIsEditMode] = useState(true);

  const toggleHandler = () => {
    setIsEditMode((prevState) => !prevState);
    if (!isEditMode) {
      saveDataHandler();
    }
  };

  return (
    <ExerciseCardStyled>
      <Exercise codeName={exerciseInfo.codeName} toggle={isEditMode} />
      <Points
        exerciseInfo={exerciseInfo}
        toggle={isEditMode}
        onChange={onChange}
      />
      <EditAccept onClick={toggleHandler} toggle={isEditMode} />
    </ExerciseCardStyled>
  );
};

ExerciseCard.propTypes = {
  exerciseInfo: PropTypes.shape({
    codeName: PropTypes.string.isRequired,
    result: PropTypes.number,
  }),
  onChange: PropTypes.func.isRequired,
  saveDataHandler: PropTypes.func.isRequired,
};

export default ExerciseCard;
