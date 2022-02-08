import propTypes from 'prop-types';

import FakeButtonStyled from './FakeButtonStyled';

const FakeButton = ({ primary, secondary, ternary, text, to }) => {
  return (
    <FakeButtonStyled
      to={to}
      primary={primary}
      secondary={secondary}
      ternary={ternary}
    >
      {text.toUpperCase()}
    </FakeButtonStyled>
  );
};

FakeButton.propTypes = {
  to: propTypes.oneOfType([
    propTypes.string.isRequired,
    propTypes.object.isRequired,
  ]),
  primary: propTypes.any,
  secondary: propTypes.any,
  ternary: propTypes.any,
  text: propTypes.string,
};

export default FakeButton;
