import PropTypes from 'prop-types';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ExerciseCard from '../../Molecules/ExerciseCard/ExerciseCard';

const ExerciseCardsContainer = ({
  dogPerformance,
  setDogPerformance, 
  saveDataHandler,
}) => {
  const performanceSaveHandler = (event) => {
    if (
      event.target.value < 0 ||
      event.target.value > 10 ||
      event.target.value % 0.5 !== 0
    ) {
      console.log('Choose points from 0 to 10 (with 0.5 step).');
    } else {
      setDogPerformance((prevState) => {
        prevState.exercises.find(
          (exercise) => exercise.codeName === event.target.id,
        ).result = Number(event.target.value);
        return prevState;
      });
    }
  };

  return (
    <>
      <ColumnWrapper>
        {dogPerformance.map((exercise) => (
          <ExerciseCard
            key={exercise.codeName}
            exerciseInfo={exercise}
            onChange={performanceSaveHandler}
            saveDataHandler={saveDataHandler}
          />
        ))}
      </ColumnWrapper>
    </>
  );
};

ExerciseCardsContainer.propTypes = {
  dogPerformance: PropTypes.any,
  setDogPerformance: PropTypes.func,
  saveDataHandler: PropTypes.func.isRequired,
};

export default ExerciseCardsContainer;
