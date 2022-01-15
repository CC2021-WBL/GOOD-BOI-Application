import propTypes from 'prop-types';

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
      <input
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
