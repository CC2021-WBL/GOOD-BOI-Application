import propTypes from 'prop-types';

import CardWrapperStyled from './CardWrapperStyled';

const CardWrapper = ({ children, column }) => {
  return <CardWrapperStyled column={column}>{children}</CardWrapperStyled>;
};

CardWrapper.propTypes = {
  children: propTypes.node,
  column: propTypes.bool,
};

export default CardWrapper;
