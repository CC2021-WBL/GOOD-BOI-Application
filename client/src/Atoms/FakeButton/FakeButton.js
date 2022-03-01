import propTypes from 'prop-types';

import FakeButtonStyled from './FakeButtonStyled';
import useMediaQuery from '../../Hooks/useMediaQuery';

const FakeButton = ({ text, paragraphText, to, state, colors, className }) => {
  const isDesktop = useMediaQuery('(min-width: 740px)');
  if (!className) {
    className = 'bez klasy to rozwiązanie';
  }
  if (isDesktop) {
    return (
      <FakeButtonStyled
        to={to}
        state={state}
        colors={colors}
        className={className}
      >
        <h3>{text}</h3>
        <p>{paragraphText}</p>
      </FakeButtonStyled>
    );
  } else {
    return (
      <FakeButtonStyled
        to={to}
        state={state}
        colors={colors}
        className={className}
      >
        {text.toUpperCase()}
      </FakeButtonStyled>
    );
  }
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
