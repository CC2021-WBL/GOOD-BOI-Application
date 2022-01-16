import propTypes from 'prop-types';
import SpecialButtonsStyled from './SpecialBittonsStyled';

const SpecialButtons = ({ special, text }) => {
  return <SpecialButtonsStyled special={special}>{text}</SpecialButtonsStyled>;
};

SpecialButtons.propTypes = {
  special: propTypes.string,
  text: propTypes.string,
};

export default SpecialButtons;
