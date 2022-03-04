import { device } from './../../Consts/devices';
import styled from 'styled-components';

const NavInnerStyled = styled.div`
  display: none;

  @media only screen and (${device.tablet}) {
    border: 1px solid ${({ theme }) => theme.grey200}; // ?
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
  }
  @media only screen and (${device.desktop}) {
    border: 2px solid ${({ theme }) => theme.grey200}; // ?
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
  }
`;

export default NavInnerStyled;
