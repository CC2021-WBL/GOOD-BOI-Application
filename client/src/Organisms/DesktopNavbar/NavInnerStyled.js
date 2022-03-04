import { device } from './../../Consts/devices';
import styled from 'styled-components';

const NavInnerStyled = styled.div`
  display: none;

  @media only screen and (${device.tablet}) {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    background: ${({ theme }) => theme.grey00};
  }
  @media only screen and (${device.desktop}) {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    background: ${({ theme }) => theme.grey00};
  }
`;

export default NavInnerStyled;
