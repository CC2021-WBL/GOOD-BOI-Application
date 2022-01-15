import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Card = (props) => {
  // eslint-disable-next-line react/prop-types
  return <CardWrapper>{props.children}</CardWrapper>;
};

export default Card;
