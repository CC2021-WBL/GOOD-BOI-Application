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
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignSelf: 'flex-start',
          }}
        >
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
        </div>
      </div>
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
  errors: propTypes.string,
  onBlur: propTypes.func,
  defaultValue: propTypes.any,
  style: propTypes.string,
};

export default InputField;
