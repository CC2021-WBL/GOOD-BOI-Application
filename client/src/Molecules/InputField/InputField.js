import InputFieldStyled from './InputFieldStyled';
import InputLabel from '../../Atoms/InputLabel/InputLabel';
import React from 'react';
import propTypes from 'prop-types';

const InputField = React.forwardRef(
  (
    {
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
      onBlur,
      register,
      errors,
      defaultValue,
    },
    ref,
  ) => {
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
          Ref={register}
          errors={errors}
          onBlur={onBlur}
          ref={ref}
          defaultValue={defaultValue}
        />
      </>
    );
  },
);
InputField.displayName = 'InputField';

InputField.propTypes = {
  htmlFor: propTypes.string.isRequired,
  labelText: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  placeholder: propTypes.string,
  value: propTypes.string,
  onChange: propTypes.func.isRequired,
  name: propTypes.string,
  required: propTypes.bool,
  className: propTypes.string,
  register: propTypes.any,
  errors: propTypes.any,
  onBlur: propTypes.any,
  execute: propTypes.any,
  defaultValue: propTypes.any,
};

export default InputField;
