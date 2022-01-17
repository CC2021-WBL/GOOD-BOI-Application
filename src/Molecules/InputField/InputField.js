import propTypes from 'prop-types';
import InputLabel from '../../Atoms/InputLabel/InputLabel';
import InputFieldStyled from './InputFieldStyled';

const InputField = ({
  id,
  type,
  placeholder,
  required,
  value,
  onChange,
  htmlFor,
  labelText,
}) => {
  return (
    <>
      <InputLabel htmlFor={htmlFor} labelText={labelText} />
      <InputFieldStyled
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

InputField.propTypes = {
  htmlFor: propTypes.string,
  labelText: propTypes.string,
  id: propTypes.string,
  type: propTypes.string,
  placeholder: propTypes.string,
  required: propTypes.bool,
  value: propTypes.string,
  onChange: propTypes.func,
};

export default InputField;
