import styled from 'styled-components';

const CardWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 1rem;
  ${(props) => props.column && `flex-direction: column;`};
`;

export default CardWrapperStyled;
