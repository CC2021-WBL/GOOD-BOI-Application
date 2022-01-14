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

export default InputField;
