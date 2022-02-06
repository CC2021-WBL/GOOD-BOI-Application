import MainButtonStyled from './MainButtonStyled';
import propTypes from 'prop-types';

// function primary, secondary, ternary
const MainButton = (props) => {
  // eslint-disable-next-line react/prop-types
  const { primary, secondary, ternary, text, className } = props;

  return (
    <MainButtonStyled
      onClick={props.onClick}
      primary={primary}
      secondary={secondary}
      ternary={ternary}
      className={className}
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
