import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ExerciseCard from '../../Molecules/ExerciseCard/ExerciseCard';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';

// import ButtonExercisesContainer from '../../Molecules/ButtonsExcercisenContainer/ButtonsExercisesContainer';

const ExerciseCardsContainer = ({ dogPerformance }) => {
  const [exercisesResults, setExercisesResults] = useState(dogPerformance);

  useEffect(() => {
    console.log('useEffect dogPerformance change');
  }, [exercisesResults]);

  const performanceSaveHandler = (event) => {
    if (
      event.target.value < 0 ||
      event.target.value > 10 ||
      event.target.value % 0.5 !== 0
    ) {
      console.log('Choose points from 0 to 10 (with 0.5 step).');
    } else {
      setExercisesResults((prevState) => {
        console.log(event.target.id);
        prevState.find(
          (exercise) => exercise.codeName === event.target.id,
        ).result = Number(event.target.value);
        console.log(prevState);
        return prevState;
      });
    }
  };
  console.log('exercisesResults');
  console.log(exercisesResults);

  return (
    <>
      <ColumnWrapper>
        {exercisesResults.map((exercise) => (
          <ExerciseCard
            key={exercise.codeName}
            exerciseInfo={exercise}
            onChange={performanceSaveHandler}
          />
        ))}
      </ColumnWrapper>
      {/* <ButtonExercisesContainer dogPerformance={exercisesResults} /> */}
    </>
  );
};

ExerciseCardsContainer.propTypes = {
  dogPerformance: PropTypes.any,
};

export default ExerciseCardsContainer;
