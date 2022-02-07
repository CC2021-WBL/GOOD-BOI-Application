import FakeButtonStyled from './FakeButtonStyled';
import propTypes from 'prop-types';

const FakeButton = ({ primary, secondary, ternary, text, to, state }) => {
  return (
    <FakeButtonStyled
      to={to}
      state={state}
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
  state: propTypes.object,
  primary: propTypes.any,
  secondary: propTypes.any,
  ternary: propTypes.any,
  text: propTypes.string,
};

export default FakeButton;
