import propTypes from 'prop-types';
import InputFieldStyled from './InputFieldStyled';

const InputField = ({
  id,
  type,
  placeholder,
  required,
  htmlFor,
  labelText,
  value,
  onChange,
}) => {
  return (
    <>
      <label htmlFor={htmlFor}>{labelText}</label>
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
  labelText: propTypes.string,
  htmlFor: propTypes.string,
  id: propTypes.string,
  type: propTypes.string,
  placeholder: propTypes.string,
  required: propTypes.bool,
  value: propTypes.string,
  onChange: propTypes.func,
};

export default InputField;
