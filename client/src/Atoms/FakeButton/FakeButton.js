import propTypes from 'prop-types';

import FakeButtonStyled from './FakeButtonStyled';

const FakeButton = ({ text, paragraphText, to, state, colors, className }) => {
  return (
    <FakeButtonStyled
      to={to}
      state={state}
      colors={colors}
      className={className}
    >
      <p className="fakebtn-header">{text}</p>
      <p className="desktop_only fakebtn-text">{paragraphText}</p>
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
