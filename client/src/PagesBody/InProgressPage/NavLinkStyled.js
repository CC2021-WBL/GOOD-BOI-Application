import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavLinkStyled = styled(NavLink)`
  &:not(.active) {
    color: ${({ theme }) => theme.grey400};
  }
  &.active {
    font-weight: bold;
    color: ${({ theme }) => theme.primary801};
  }
`;

export default NavLinkStyled;
