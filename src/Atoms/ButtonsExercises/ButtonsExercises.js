import ButtonExercisesStyled from './ButtonExercisesStyled';
import propTypes from 'prop-types';

// function primary, secondary, ternary
const ButtonExercises = (props) => {
  const { endingButton, goBack, text } = props;

  return (
    <ButtonExercisesStyled
      onClick={props.onClick}
      endingButton={endingButton}
      goBack={goBack}
    >
      {text.toUpperCase()}
    </ButtonExercisesStyled>
  );
};

ButtonExercises.propTypes = {
  endingButton: propTypes.bool,
  goBack: propTypes.bool,
  text: propTypes.string.isRequired,
  onClick: propTypes.func,
};

export default ButtonExercises;
