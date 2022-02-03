import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ExerciseCard from '../../Molecules/ExerciseCard/ExerciseCard';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ExerciseCardsContainer = ({ performanceObject }) => {
  const { exercises, obedienceClass } = performanceObject;
  const [exercisesResults, setExercisesResults] = useState(exercises);

  const performanceSaveHandler = (event) => {
    if (
      event.target.value < 0 ||
      event.target.value > 10 ||
      event.target.value % 0.5 !== 0
    ) {
      console.log('Choose points from 0 to 10 (with 0.5 step).');
    } else {
      setExercisesResults((prevState) => {
        prevState.find(
          (exercise) => exercise.codeName === event.target.id,
        ).result = Number(event.target.value);
        localStorage.setItem(
          'performanceObject',
          JSON.stringify(performanceObject),
        );
        return prevState;
      });
    }
  };

  return (
    <ColumnWrapper>
      {exercisesResults.map((exercise) => (
        <ExerciseCard
          key={exercise.codeName}
          exerciseInfo={exercise}
          obedienceClassName={obedienceClass}
          onChange={performanceSaveHandler}
        />
      ))}
    </ColumnWrapper>
  );
};

ExerciseCardsContainer.propTypes = {
  performanceObject: PropTypes.object,
};

export default ExerciseCardsContainer;
