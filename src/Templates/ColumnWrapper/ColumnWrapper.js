import propTypes from 'prop-types';
import ColumnWrapperStyled from './ColumnWrapperStyled';

const ColumnWrapper = ({ children }) => {
  return <ColumnWrapperStyled>{children}</ColumnWrapperStyled>;
};

ColumnWrapper.propTypes = {
  children: propTypes.node,
};

export default ColumnWrapper;
