import propTypes from 'prop-types';

import SpecialButtonStyled from './SpecialButtonStyled';

const SpecialButton = ({ special, edit, confirm, text, handler }) => {
  return (
    <SpecialButtonStyled
      onClick={handler}
      special={special}
      edit={edit}
      confirm={confirm}
    >
      {text}
    </SpecialButtonStyled>
  );
};

SpecialButton.propTypes = {
  special: propTypes.bool,
  edit: propTypes.bool,
  confirm: propTypes.bool,
  text: propTypes.string.isRequired,
  handler: propTypes.func.isRequired,
};

export default SpecialButton;
