import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import FakeButton from '../../Atoms/FakeButton/FakeButton';

const NavButtonsStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 21.875rem;
  gap: 1rem;
`;

const NavButtons = () => {
  const location = useLocation();
  return (
    <NavButtonsStyled>
      {location.pathname !== '/register' && (
        <FakeButton to="/register" colors="ternary" text="Zarejestruj" />
      )}
      {location.pathname !== '/login' && (
        <FakeButton to="/login" colors="primary" text="Zaloguj się" />
      )}
    </NavButtonsStyled>
  );
};

export default NavButtons;
