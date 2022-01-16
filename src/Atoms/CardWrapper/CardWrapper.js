import CardWrapperStyled from './CardWrapperStyled';
import propTypes from 'prop-types';

const CardWrapper = (props) => {
  return <CardWrapperStyled>{props.children}</CardWrapperStyled>;
};

CardWrapper.propTypes = {
  children: propTypes.node,
};

export default CardWrapper;
