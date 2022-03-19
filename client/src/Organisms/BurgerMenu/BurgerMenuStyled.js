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
    position: fixed;
    bottom: 0.8125rem;
    padding: 0 0 0 0.8125rem;
  }

  @media only screen and (min-width: 800px) {
    position: unset;
    height: 100%;
    grid-area: 3 / 1 / 4 / 2;
    transform: none;
    transition: none;
    display: none;
  }
  @media only screen and (min-width: 1600px) {
    display: none;
  }
`;

export default BurgerMenuStyled;
