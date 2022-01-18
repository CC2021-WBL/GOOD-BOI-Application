import propTypes from 'prop-types';
import MainBtnStyled from './MainBtnStyled';

// function primary, secondary, ternary
const MainBtn = (props) => {
  const { primary, secondary, ternary, text } = props;

  return (
    <MainBtnStyled
      onClick={props.onClick}
      primary={primary}
      secondary={secondary}
      ternary={ternary}
    >
      {text.toUpperCase()}
    </MainBtnStyled>
  );
};

MainBtn.propTypes = {
  primary: propTypes.bool,
  secondary: propTypes.bool,
  ternary: propTypes.bool,
  text: propTypes.string.isRequired,
  onClick: propTypes.func,
};

export default MainBtn;
