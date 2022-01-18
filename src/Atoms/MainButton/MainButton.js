import propTypes from 'prop-types';
import MainButtonStyled from './MainButtonStyled';

// function primary, secondary, ternary
const MainButton = (props) => {
  const { primary, secondary, ternary, text } = props;

  return (
    <MainButtonStyled
      onClick={props.onClick}
      primary={primary}
      secondary={secondary}
      ternary={ternary}
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
};

export default MainButton;
