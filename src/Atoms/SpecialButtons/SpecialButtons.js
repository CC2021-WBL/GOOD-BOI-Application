import propTypes from 'prop-types';
import SpecialButtonsStyled from './SpecialBittonsStyled';

const SpecialButtons = (props) => {
  return (
    <SpecialButtonsStyled special={props.special}>
      {props.text}
    </SpecialButtonsStyled>
  );
};

SpecialButtons.propTypes = {
  special: propTypes.string,
  text: propTypes.string,
};

export default SpecialButtons;
