import propTypes from 'prop-types';

import FormWrapperStyled from './FormWrapperStyled';

const FormWrapper = (children) => {
  return <FormWrapperStyled>{children}</FormWrapperStyled>;
};

FormWrapper.propTypes = {
  children: propTypes.node,
};

export default FormWrapper;
