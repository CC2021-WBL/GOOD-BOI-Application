import SpecialButtonStyled from './SpecialButtonStyled';
import propTypes from 'prop-types';

const SpecialButton = ({ roundedBorder, text, handler, theme }) => {
  return (
    <SpecialButtonStyled
      onClick={handler}
      roundedBorder={roundedBorder}
      theme={theme}
    >
      {text}
    </SpecialButtonStyled>
  );
};

SpecialButton.propTypes = {
  roundedBorder: propTypes.string,
  text: propTypes.string.isRequired,
  handler: propTypes.func,
  theme: propTypes.string,
};

export default SpecialButton;
