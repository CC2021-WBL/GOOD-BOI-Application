import styled from 'styled-components';
import { ReactComponent as LogoutSVG } from '../../Assets/Logout.svg';
import { NavLink } from 'react-router-dom';
const LogoutLiWithSVG = () => {
  return (
    <LogoutLiStyled>
      <LogoutSVG />
      <a href="/logout"> Wyloguj</a>
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
