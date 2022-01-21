import propTypes from 'prop-types';
import InputLabel from '../../Atoms/InputLabel/InputLabel';
import InputFieldStyled from './InputFieldStyled';

const InputField = ({
  id,
  type,
  placeholder,
  // required,
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
        // required={required}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

InputField.propTypes = {
  htmlFor: propTypes.string.isRequired,
  labelText: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  placeholder: propTypes.string,
  // required: propTypes.bool.isRequired,
  value: propTypes.string,
  onChange: propTypes.func.isRequired,
};

export default InputField;
