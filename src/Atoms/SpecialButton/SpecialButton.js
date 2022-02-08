import SpecialButtonStyled from './SpecialButtonStyled';
import propTypes from 'prop-types';

const SpecialButton = ({ roundedBorder, text, handler, colors }) => {
  return (
    <SpecialButtonStyled
      onClick={handler}
      roundedBorder={roundedBorder}
      colors={colors}
    >
      {text}
    </SpecialButtonStyled>
  );
};

SpecialButton.propTypes = {
  roundedBorder: propTypes.string,
  text: propTypes.string.isRequired,
  handler: propTypes.func,
  colors: propTypes.string,
};

export default SpecialButton;
