import propTypes from 'prop-types';
import InputLabel from '../InputLabel/InputLabel';
import TextAreaStyled from './TextAresStyled';

const TextArea = ({
  id,
  placeholder,
  required,
  value,
  onChange,
  htmlFor,
  labelText,
  name,
  className,
}) => {
  return (
    <>
      <InputLabel htmlFor={htmlFor} labelText={labelText} />
      <TextAreaStyled
        id={id}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        name={name}
        className={className}
      />
    </>
  );
};

TextArea.propTypes = {
  htmlFor: propTypes.string.isRequired,
  labelText: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  placeholder: propTypes.string,
  required: propTypes.bool.isRequired,
  value: propTypes.string,
  onChange: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  className: propTypes.string,
};

export default TextArea;
