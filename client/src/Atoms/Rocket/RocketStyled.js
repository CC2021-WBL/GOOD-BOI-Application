import styled from 'styled-components';

const RocketStyled = styled.div`
  position: absolute;
  bottom: 60px;
  &:hover {
    animation: pop 2.5s infinite;
    @keyframes pop {
      0% {
        transform: translate(0%, 0%) scale(1, 1);
      }
      50% {
        transform: translate(0%, -20%) scale(1.1, 1.1) rotate(720deg);
      }

      100% {
        transform: translate(0%, 0%);
      }
    }
  }
`;
export default RocketStyled;
