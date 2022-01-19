import propTypes from 'prop-types';

import FormWrapperStyled from './FormWrapperStyled';

const FormWrapper = (props) => {
  return <FormWrapperStyled>{props.children}</FormWrapperStyled>;
};

FormWrapper.propTypes = {
  children: propTypes.node,
};

export default FormWrapper;
