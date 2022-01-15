import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Card = (props) => {
  return <CardWrapper>{props.children}</CardWrapper>;
};

Card.propTypes = {
  children: propTypes.node,
};

export default Card;
