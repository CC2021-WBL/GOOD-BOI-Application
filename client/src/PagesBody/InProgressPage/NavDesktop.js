import { NavLink, useLocation } from 'react-router-dom';

import { ReactComponent as AppLogoSVG } from '../../Assets/AppLogoSVG.svg';
import ButtonsWrapperStyled from './ButtonsWrapperStyled';
import FakeButton from './../../Atoms/FakeButton/FakeButton';
import NavDesktopInnerStyled from './NavDesktopInnerStyled';
import NavDesktopWrapperStyled from './NavDesktopWrapperStyled';
import NavMenuButton from './NavMenuButton';
import { UserDataContext } from './../../Context/UserDataContext';
import { useContext } from 'react';

const NavDesktop = () => {
  const location = useLocation();
  const { state, dispatch } = useContext(UserDataContext);
  const { userId, roles, isAuthenticated } = state;
  if (!isAuthenticated) {
    return (
      <NavDesktopWrapperStyled>
        <NavDesktopInnerStyled>
          <AppLogoSVG />
          <NavLink
            exact
            to="/login"
            style={({ isActive }) => ({
              color: isActive ? 'black' : 'grey',
              fontWeight: isActive ? 'bold' : 'normal',
            })}
          >
            STRONA GŁÓWNA
          </NavLink>
          <NavLink
            to="/contests"
            style={({ isActive }) => ({
              color: isActive ? 'black' : 'grey',
              fontWeight: isActive ? 'bold' : 'normal',
            })}
          >
            AKTUALNE KONKURSY
          </NavLink>
          <NavLink
            to="/register"
            style={({ isActive }) => ({
              color: isActive ? 'black' : 'grey',
              fontWeight: isActive ? 'bold' : 'normal',
            })}
          >
            WEŹ UDZIAŁ W ZAWODACH
          </NavLink>

          <ButtonsWrapperStyled>
            {location.pathname !== '/register' && (
              <FakeButton to="/register" colors="ternary" text="Zarejestruj" />
            )}
            {location.pathname !== '/login' && (
              <FakeButton to="/login" colors="primary" text="Zaloguj się" />
            )}
          </ButtonsWrapperStyled>
        </NavDesktopInnerStyled>
      </NavDesktopWrapperStyled>
    );
  }
  return (
    <NavDesktopWrapperStyled>
      <NavDesktopInnerStyled>
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            alignItems: 'center',
            gap: '2rem',
            left: '5rem',
          }}
        >
          <AppLogoSVG />
          GOOD BOI APP
        </div>
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            position: 'absolute',
            right: '10rem',
          }}
        >
          <NavMenuButton />
        </div>
      </NavDesktopInnerStyled>
    </NavDesktopWrapperStyled>
  );
};

export default NavDesktop;
