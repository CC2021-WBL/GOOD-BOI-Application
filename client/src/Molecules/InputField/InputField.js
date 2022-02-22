import propTypes from 'prop-types';

import InputFieldStyled from './InputFieldStyled';
import InputLabel from '../../Atoms/InputLabel/InputLabel';

const InputField = ({
  id,
  type,
  placeholder,
  value,
  onChange,
  htmlFor,
  labelText,
  name,
  required,
  className,
}) => {
  return (
    <>
      <InputLabel htmlFor={htmlFor} labelText={labelText} />
      <InputFieldStyled
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        required={required}
        className={className}
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
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func.isRequired,
  name: propTypes.string,
  required: propTypes.bool,
  className: propTypes.string,
};

export default InputField;
