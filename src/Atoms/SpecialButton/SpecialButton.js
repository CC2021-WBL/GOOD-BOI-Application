import SpecialButtonStyled from './SpecialButtonStyled';
import propTypes from 'prop-types';

const SpecialButton = ({ left, right, text, handler, colors }) => {
  return (
    <SpecialButtonStyled
      onClick={handler}
      left={left}
      right={right}
      colors={colors}
    >
      {text}
    </SpecialButtonStyled>
  );
};

SpecialButton.propTypes = {
  left: propTypes.bool,
  right: propTypes.bool,
  text: propTypes.string.isRequired,
  handler: propTypes.func,
  colors: propTypes.string,
};

export default SpecialButton;
