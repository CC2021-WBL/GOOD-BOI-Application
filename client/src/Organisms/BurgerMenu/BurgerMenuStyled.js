import styled from 'styled-components';
import { device } from '../../Consts/devices';

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
  @media only screen and ${device.tablet} {
    /* grid-column: 3; */
    /* position: absolute; */
    display: none;
    /* padding: 0;
    
    height: 120px; */
    /* width: 100%;
    grid-column: 2;
    position: unset;
    height: unset; */
    /* max-width: 1600px; */
    /* margin: 0 auto; */
    /* background-color: ${({ theme }) => theme.grey200}; */
  }

  .footer {
    display: flex;
    justify-content: flex-start;
    background: ${({ theme }) => theme.white};
  }
`;

export default BurgerMenuStyled;
