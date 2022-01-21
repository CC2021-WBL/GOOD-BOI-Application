import propTypes from 'prop-types';
import SpecialButtonStyled from './SpecialButtonStyled';

const SpecialButton = ({ special, text }) => {
  return <SpecialButtonStyled special={special}>{text}</SpecialButtonStyled>;
};

SpecialButton.propTypes = {
  special: propTypes.bool,
  text: propTypes.string,
};

export default SpecialButton;
