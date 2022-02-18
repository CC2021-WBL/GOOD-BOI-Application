import propTypes from 'prop-types';

import FormWrapperStyled from './FormWrapperStyled';

const FormWrapper = ({ children, onSubmit }) => {
  return <FormWrapperStyled onSubmit={onSubmit}>{children}</FormWrapperStyled>;
};

FormWrapper.propTypes = {
  children: propTypes.node,
  onSubmit: propTypes.func.isRequired,
};

export default FormWrapper;
