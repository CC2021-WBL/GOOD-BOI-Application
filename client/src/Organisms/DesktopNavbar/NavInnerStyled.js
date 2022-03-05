import { device } from './../../Consts/devices';
import styled from 'styled-components';

const NavInnerStyled = styled.div`
  display: none;

  @media only screen and (${device.tablet}) {
    // devices with min-width > 800
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 0rem 0rem 0rem 4.5rem;
    background: ${({ theme }) => theme.grey00};
  }
`;

export default NavInnerStyled;
