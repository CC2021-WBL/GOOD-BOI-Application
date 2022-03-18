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
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  ${(props) => props.stylefor === 'Sidebar' && 'padding-left: .5rem'};
  gap: 1rem;
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
