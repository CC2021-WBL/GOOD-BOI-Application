import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Card = (props) => {
  return <CardWrapper>{props.children}</CardWrapper>;
};

export default Card;
