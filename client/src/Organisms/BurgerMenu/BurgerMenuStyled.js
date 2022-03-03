import styled from 'styled-components';

const BurgerMenuStyled = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 14.5625rem;
  height: 100vh;
  background: ${({ theme }) => theme.white};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.4s linear;
  .footer {
    display: flex;
    justify-content: flex-start;
    background: ${({ theme }) => theme.white};
  }

  @media only screen and (min-width: 800px) {
    grid-area: 3 / 1 / 4 / 2;
    position: unset;
    transform: none;
    height: 100%;
    transition: none;
  }
  @media only screen and (min-width: 1600px) {
    grid-area: 3 / 2 / 4 / 3;
  }
`;

export default BurgerMenuStyled;
