import PropTypes from 'prop-types';
import ExerciseCardsContainerStyled from './ExerciseCardsContainerStyled';
import ExerciseCard from '../../Molecules/ExerciseCard/ExerciseCard';

const ExerciseCardsContainer = ({ performanceObject }) => {
  const { exercises, obedienceClassName } = performanceObject;

  return (
    <ExerciseCardsContainerStyled>
      {exercises.map((exercise) => (
        <ExerciseCard
          key={exercise.codeName}
          exerciseInfo={exercise}
          obedienceClassName={obedienceClassName}
        />
      ))}
    </ExerciseCardsContainerStyled>
  );
};

ExerciseCardsContainer.propTypes = {
  performanceObject: PropTypes.object,
};

export default ExerciseCardsContainer;
