import { ReactComponent as LogoutSVG } from '../../Assets/Logout.svg';
import { NavLink } from 'react-router-dom';
import NavLinkStyled from './NavLinkStyled';
import styled from 'styled-components';

const LogoutLiWithSVG = () => {
  return (
    <LogoutLiStyled>
      <LogoutSVG />
      <NavLinkStyled to="/">Wyloguj</NavLinkStyled>
    </LogoutLiStyled>
  );
};

const LogoutLiStyled = styled.div`
  display: flex;
  color: ${({ theme }) => theme.grey400};
  align-items: center;
  gap: 1rem;
  height: 3rem;
  padding: 0 0 0 1rem;
  &:hover {
    background: ${({ theme }) => theme.grey00};
    cursor: pointer;
    filter: brightness(0.9);
  }
`;

export default LogoutLiWithSVG;
