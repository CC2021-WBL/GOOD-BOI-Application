import { useState } from 'react';
import PropTypes from 'prop-types';
import ExerciseCard from '../../Molecules/ExerciseCard/ExerciseCard';
import ExerciseCardsContainerStyled from './ExerciseCardsContainerStyled';

const ExerciseCardsContainer = ({ performanceObject }) => {
  const { exercises, obedienceClassName } = performanceObject;
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
        console.log(performanceObject);
        return prevState;
      });
    }
  };

  return (
    <ExerciseCardsContainerStyled>
      {exercisesResults.map((exercise) => (
        <ExerciseCard
          key={exercise.codeName}
          exerciseInfo={exercise}
          obedienceClassName={obedienceClassName}
          onChange={performanceSaveHandler}
        />
      ))}
    </ExerciseCardsContainerStyled>
  );
};

ExerciseCardsContainer.propTypes = {
  performanceObject: PropTypes.object,
};

export default ExerciseCardsContainer;
