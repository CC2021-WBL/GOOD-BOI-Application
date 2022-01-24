import ButtonExercisesStyled from './ButtonExercisesStyled';
import propTypes from 'prop-types';

// function primary, secondary, ternary
const ButtonExercises = (props) => {
  const { endingButton, goBackButtton, text } = props;

  return (
    <ButtonExercisesStyled
      onClick={props.onClick}
      endingButton={endingButton}
      goBackButtton={goBackButtton}
    >
      {text.toUpperCase()}
    </ButtonExercisesStyled>
  );
};

ButtonExercises.propTypes = {
  endingButton: propTypes.bool,
  goBackButtton: propTypes.bool,
  text: propTypes.string.isRequired,
  onClick: propTypes.func,
};

export default ButtonExercises;
