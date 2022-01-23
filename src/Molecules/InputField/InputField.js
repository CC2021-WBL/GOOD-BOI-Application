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
  name,
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
        name={name}
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
  required: propTypes.bool.isRequired,
  value: propTypes.string,
  onChange: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
};

export default InputField;
