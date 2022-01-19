import propTypes from 'prop-types';
import SpecialButtonStyled from './SpecialButtonStyled';

const SpecialButton = ({ special, text, handler }) => {
  return (
    <SpecialButtonStyled onClick={handler} special={special}>
      {text}
    </SpecialButtonStyled>
  );
};

SpecialButton.propTypes = {
  special: propTypes.bool,
  text: propTypes.string,
  handler: propTypes.func.isRequired,
};

export default SpecialButton;
