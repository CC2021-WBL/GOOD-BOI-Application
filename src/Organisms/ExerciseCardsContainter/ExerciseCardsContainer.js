import { useState } from 'react';
import PropTypes from 'prop-types';
import ExerciseCard from '../../Molecules/ExerciseCard/ExerciseCard';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';

const ExerciseCardsContainer = ({ dogPerformance }) => {
  const [exercisesResults, setExercisesResults] = useState(dogPerformance);

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
        console.log(dogPerformance);
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
          onChange={performanceSaveHandler}
        />
      ))}
    </ColumnWrapper>
  );
};

ExerciseCardsContainer.propTypes = {
  dogPerformance: PropTypes.array,
};

export default ExerciseCardsContainer;
