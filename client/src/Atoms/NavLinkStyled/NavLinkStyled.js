import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const bgHandler = (props) => {
  if (props.stylefor === 'Sidebar')
    return `background: ${props.theme.primary101}`;
  if (props.stylefor === 'Cornermenu')
    return `color: ${props.theme.grey400}; font-weight: normal`;
  if (props.stylefor === 'Navbar') return `color: ${props.theme.primary801}`;
};

const NavLinkStyled = styled(NavLink)`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  gap: 1rem;
  ${(props) => props.stylefor === 'Sidebar' && 'padding-left: .5rem'};
  transition: color 0.2s ease-in-out;
  &:not(.active) {
    color: ${({ theme }) => theme.grey400};
  }
  &.active {
    color: ${({ theme }) => theme.primary601};
    font-weight: bold;
    ${(props) => bgHandler(props)};
  }
`;

export default NavLinkStyled;
