import propTypes from 'prop-types';
import PriSecBtnStyled from './PriSecBtnStyled';

const PriSecBtn = (props) => {
  return (
    <PriSecBtnStyled primary={props.primary}>{props.text}</PriSecBtnStyled>
  );
};

PriSecBtn.propTypes = {
  primary: propTypes.string,
  text: propTypes.string,
};

export default PriSecBtn;
