import styled from 'styled-components';

const RocketStyled = styled.div`
  &:hover {
    animation: pop 3s infinite;
    @keyframes pop {
      0% {
        transform: translate(0%, 0%) scale(1, 1);
      }
      50% {
        transform: translate(0%, -20%) scale(1.1, 1.1) rotate(360deg);
      }

      100% {
        transform: translate(0%, 0%);
      }
    }
  }
`;
export default RocketStyled;
