import propTypes from 'prop-types';

import ButtonLikeLinkStyled from './ButtonLikeLinkStyled';

const ButtonLikeLink = ({ primary, secondary, ternary, text, to }) => {
  return (
    <ButtonLikeLinkStyled
      to={to}
      primary={primary}
      secondary={secondary}
      ternary={ternary}
    >
      {text.toUpperCase()}
    </ButtonLikeLinkStyled>
  );
};

ButtonLikeLink.propTypes = {
  to: propTypes.oneOfType([
    propTypes.string.isRequired,
    propTypes.object.isRequired,
  ]),
  primary: propTypes.any,
  secondary: propTypes.any,
  ternary: propTypes.any,
  text: propTypes.string,
};

export default ButtonLikeLink;
