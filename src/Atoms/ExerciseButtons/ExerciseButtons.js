import propTypes from 'prop-types';
import ExerciseButtonStyled from './ExerciseButtonsStyled';

const ExerciseButton = (props) => {
  const { ending, back, text } = props;

  return (
    <ExerciseButtonStyled onClick={props.onClick} ending={ending} back={back}>
      {text.toUpperCase()}
    </ExerciseButtonStyled>
  );
};

ExerciseButton.propTypes = {
  ending: propTypes.bool,
  back: propTypes.bool,
  text: propTypes.string.isRequired,
  onClick: propTypes.func,
};

export default ExerciseButton;
