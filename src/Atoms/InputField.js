import propTypes from "prop-types";

const InputField = ({
  id,
  type,
  placeholder,
  required,
  reference,
  htmlFor,
  labelText,
}) => {
  return (
    <>
      <label htmlFor={htmlFor}>{labelText}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        ref={reference}></input>
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
  reference: propTypes.object,
};

export default InputField;
