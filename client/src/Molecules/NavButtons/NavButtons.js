import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import FakeButton from '../../Atoms/FakeButton/FakeButton';

const NavButtonsStyled = styled.div`
  display: flex;
  min-width: 21.875rem;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
`;

const NavButtons = () => {
  const location = useLocation();
  return (
    <NavButtonsStyled>
      {location.pathname !== '/register' && (
        <FakeButton to="/register" colors="ternary" text="Zarejestruj się" />
      )}

      {location.pathname !== '/login' && location.pathname !== '/' && (
        <FakeButton to="/login" colors="primary" text="Zaloguj się" />
      )}
    </NavButtonsStyled>
  );
};

export default NavButtons;
