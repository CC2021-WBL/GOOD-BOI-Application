import ButtonExercisesStyled from './ButtonExercisesStyled';
import { FaChevronLeft } from 'react-icons/fa';
import propTypes from 'prop-types';

const ButtonExercises = (props) => {
  const { endingButton, goBack, text } = props;

  return (
    <ButtonExercisesStyled
      onClick={props.onClick}
      endingButton={endingButton}
      goBack={goBack}
    >
      {goBack && <FaChevronLeft />}
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
