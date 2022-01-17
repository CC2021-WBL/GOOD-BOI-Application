import PropTypes from 'prop-types';
import ExerciseCardsContainerStyled from './ExerciseCardsContainerStyled';
import ExerciseCard from '../../Molecules/ExerciseCard/ExerciseCard';
import { useState } from 'react';

const ExerciseCardsContainer = ({ performanceObject }) => {
  const [performance, setPerformance] = useState(performanceObject);
  const { exercises, obedienceClassName } = performance;
  console.log(performance);

  const performanceSaveHandler = (event) => {
    if (
      event.target.value < 0 ||
      event.target.value > 10 ||
      event.target.value % 0.5 !== 0
    ) {
      console.log('Choose points from 0 to 10.');
    } else {
      setPerformance((prevState) => ({
        ...prevState,
        codename: event.target.id,
        result: event.target.value,
      }));
      console.log(performance);
    }
  };

  return (
    <ExerciseCardsContainerStyled>
      {exercises.map((exercise) => (
        <ExerciseCard
          key={exercise.codeName}
          exerciseInfo={exercise}
          obedienceClassName={obedienceClassName}
          onChange={performanceSaveHandler}
        />
      ))}

      <input onChange={performanceSaveHandler} />
    </ExerciseCardsContainerStyled>
  );
};

ExerciseCardsContainer.propTypes = {
  performanceObject: PropTypes.object,
};

export default ExerciseCardsContainer;
