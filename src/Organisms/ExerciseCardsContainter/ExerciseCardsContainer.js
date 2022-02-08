// import ButtonExercisesContainer from '../../Molecules/ButtonsExcercisenContainer/ButtonsExercisesContainer';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ExerciseCard from '../../Molecules/ExerciseCard/ExerciseCard';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';

const ExerciseCardsContainer = ({ dogPerformance }) => {
  const [exercisesResults, setExercisesResults] = useState(dogPerformance);

  useEffect(() => {}, [exercisesResults]);

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
