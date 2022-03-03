import { ReactComponent as LogoutSVG } from '../../Assets/Logout.svg';
import NavLinkStyled from './NavLinkStyled';
import { UserDataContext } from '../../Context/UserDataContext';
import styled from 'styled-components';
import { useContext } from 'react';

const LogoutLiWithSVG = () => {
  const { state, dispatch } = useContext(UserDataContext);
  const { userId } = state;

  return (
    <LogoutLiStyled>
      <LogoutSVG />
      <NavLinkStyled
        to="/"
        onClick={() => {
          dispatch({ type: 'LOG_OUT', index: 1 });
        }}
      >
        Wyloguj
      </NavLinkStyled>
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
