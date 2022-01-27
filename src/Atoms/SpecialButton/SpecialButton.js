import propTypes from 'prop-types';

import SpecialButtonStyled from './SpecialButtonStyled';

const SpecialButton = ({ special, text, handler, theme }) => {
  return (
    <SpecialButtonStyled onClick={handler} special={special} theme={theme}>
      {text}
    </SpecialButtonStyled>
  );
};

SpecialButton.propTypes = {
  special: propTypes.bool,
  text: propTypes.string.isRequired,
  handler: propTypes.func.isRequired,
  theme: propTypes.string,
};

export default SpecialButton;
