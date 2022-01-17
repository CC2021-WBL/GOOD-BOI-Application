import PropTypes from 'prop-types';
import ExerciseCardsContainerStyled from './ExerciseCardsContainerStyled';

const ExerciseCardsContainer = ({ children }) => {
  return (
    <ExerciseCardsContainerStyled>{children}</ExerciseCardsContainerStyled>
  );
};

ExerciseCardsContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ExerciseCardsContainer;
