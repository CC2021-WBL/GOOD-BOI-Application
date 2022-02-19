import MainButtonStyled from './MainButtonStyled';
import propTypes from 'prop-types';

// function primary, secondary, ternary
const MainButton = (props) => {
  const { primary, secondary, ternary, text, className, justifyText } = props;

  return (
    <MainButtonStyled
      onClick={props.onClick}
      primary={primary}
      secondary={secondary}
      ternary={ternary}
      className={className}
      justifyText={justifyText}
    >
      {text.toUpperCase()}
    </MainButtonStyled>
  );
};

MainButton.propTypes = {
  primary: propTypes.bool,
  secondary: propTypes.bool,
  ternary: propTypes.bool,
  text: propTypes.string.isRequired,
  onClick: propTypes.func,
  justifyText: propTypes.string,
  className: propTypes.string,
};

export default MainButton;
