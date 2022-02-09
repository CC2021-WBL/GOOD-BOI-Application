import ButtonExercisesStyled from './ButtonExercisesStyled';
import { FaChevronLeft } from 'react-icons/fa';
import propTypes from 'prop-types';

const ButtonExercises = (props) => {
  const { primary, secondary, text, handler } = props;

  return (
    <ButtonExercisesStyled
      onClick={handler}
      primary={primary}
      secondary={secondary}
    >
      {secondary && <FaChevronLeft />}
      {text.toUpperCase()}
    </ButtonExercisesStyled>
  );
};

ButtonExercises.propTypes = {
  primary: propTypes.bool,
  secondary: propTypes.bool,
  text: propTypes.string.isRequired,
  onClick: propTypes.func,
  handler: propTypes.func,
};

export default ButtonExercises;
