import propTypes from 'prop-types';

import FakeButtonStyled from './FakeButtonStyled';

const FakeButton = ({ text, paragraphText, to, state, colors, className }) => {
  //TODO: może dodać klasę w przypadku każdego użycia fakebuttona
  if (!className) {
    className = 'bez klasy to rozwiązanie';
  }
  return (
    <FakeButtonStyled
      to={to}
      state={state}
      colors={colors}
      className={className}
    >
      <p className="fakebtn_header">{text}</p>
      <p className="desktop_only fakebtn_text">{paragraphText}</p>
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
