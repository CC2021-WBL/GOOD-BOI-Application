import SpecialButtonStyled from './SpecialButtonStyled';
import propTypes from 'prop-types';

const SpecialButton = ({
  roundedBorder,
  /*left, right,*/ text,
  handler,
  theme,
}) => {
  return (
    <SpecialButtonStyled
      onClick={handler}
      // left={left}
      // right={right}
      roundedBorder={roundedBorder}
      theme={theme}
    >
      {text}
    </SpecialButtonStyled>
  );
};

SpecialButton.propTypes = {
  // left: propTypes.bool,
  // right: propTypes.bool,
  roundedBorder: propTypes.string,
  text: propTypes.string.isRequired,
  handler: propTypes.func,
  theme: propTypes.string,
};

export default SpecialButton;
