import CardWrapperStyled from './CardWrapperStyled';
import propTypes from 'prop-types';

const CardWrapper = (children) => {
  return <CardWrapperStyled>{children}</CardWrapperStyled>;
};

CardWrapper.propTypes = {
  children: propTypes.node,
};

export default CardWrapper;
