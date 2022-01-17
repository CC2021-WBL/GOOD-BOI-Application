import propTypes from 'prop-types';
import InputLabelStyled from './InputLabelStyled';

const InputLabel = ({ htmlFor, labelText }) => {
  return <InputLabelStyled htmlFor={htmlFor}>{labelText}</InputLabelStyled>;
};

InputLabel.propTypes = {
  labelText: propTypes.string,
  htmlFor: propTypes.string,
};

export default InputLabel;
