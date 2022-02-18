import propTypes from 'prop-types';

import FakeButtonStyled from './FakeButtonStyled';

const FakeButton = ({ text, to, state, colors }) => {
  return (
    <FakeButtonStyled to={to} state={state} colors={colors}>
      {text.toUpperCase()}
    </FakeButtonStyled>
  );
};

FakeButton.propTypes = {
  to: propTypes.oneOfType([
    propTypes.string.isRequired,
    propTypes.object.isRequired,
  ]),
  text: propTypes.string,
  state: propTypes.object,
  colors: propTypes.string,
};

export default FakeButton;
