import { ReactComponent as LogoutSVG } from '../../Assets/Logout.svg';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LogoutLiWithSVG = () => {
  return (
    <LogoutLiStyled>
      <LogoutSVG />
      <NavLink
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
        to="/login"
      >
        Wyloguj
      </NavLink>
    </LogoutLiStyled>
  );
};

const LogoutLiStyled = styled.div`
  display: flex;
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
