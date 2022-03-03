import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const bgHandler = (props) => {
  if (props.formolecule === 'Sidebar')
    return `background: ${props.theme.primary101}`;
  if (props.formolecule === 'Cornermenu')
    return `background: ${props.theme.primary201}`;
  if (props.formolecule === 'Navbar')
    return `background: ${props.theme.primary501}`;
};

const NavLinkStyled = styled(NavLink)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 0 0 0.5rem;
  gap: 1rem; // gap between nav icons and text
  &:not(.active) {
    color: ${({ theme }) => theme.grey400};
  }
  &.active {
    font-weight: bold;
    color: ${({ theme }) => theme.primary601};
    ${(props) => bgHandler(props)};
  }
`;

export default NavLinkStyled;
