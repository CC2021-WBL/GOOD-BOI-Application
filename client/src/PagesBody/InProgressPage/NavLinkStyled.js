import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const bgHandler = (props) => {
  if (props.formolecule === 'Sidebar')
    return `background: ${props.theme.primary101}`;
  if (props.formolecule === 'Cornermenu')
    return `background: ${props.theme.primary101}`;
};

const NavLinkStyled = styled(NavLink)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: -3.1rem;
  padding: 0 0 0 3.2rem;
  z-index: -1;
  &:not(.active) {
    color: ${({ theme }) => theme.grey400};
  }
  &.active {
    font-weight: bold;
    color: ${({ theme }) => theme.primary801};
    ${(props) => bgHandler(props)};
  }
`;

export default NavLinkStyled;
