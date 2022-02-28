import styled from 'styled-components';

const RocketStyled = styled.div`
  transform: translate(0%);
  transition: 0.3s ease-out;

  &:hover {
    transform: translate(-5%, -30%);
    transition: transform 0.3s ease-in;
  }
`;
export default RocketStyled;
