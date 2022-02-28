import { NavLink, useLocation } from 'react-router-dom';

import { ReactComponent as AppLogoSVG } from '../../Assets/AppLogoSVG.svg';
import ButtonsWrapperStyled from './ButtonsWrapperStyled';
import FakeButton from './../../Atoms/FakeButton/FakeButton';
import NavDesktopInnerStyled from './NavDesktopInnerStyled';
import NavDesktopWrapperStyled from './NavDesktopWrapperStyled';
import NavAccordion from './NavAccordion';
import { UserDataContext } from './../../Context/UserDataContext';
import { useContext, useState } from 'react';
import GoodBoiLogo from './GoodBoiLogo';
import NavAccordionStyled from './NavAccordionStyled';

const NavDesktop = () => {
  const location = useLocation();
  const { state, dispatch } = useContext(UserDataContext);
  const { userId, roles, isAuthenticated } = state;
  const [menuOpen, setMenuOpen] = useState(true);
  const toggleHandler = () => {
    console.log(menuOpen);
    setMenuOpen(!menuOpen);
    return menuOpen;
  };
  if (!isAuthenticated) {
    return (
      <NavDesktopWrapperStyled>
        <NavDesktopInnerStyled>
          <AppLogoSVG />
          <NavLink
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
  // when not logged in:
  return (
    <NavDesktopWrapperStyled>
      <NavDesktopInnerStyled>
        <GoodBoiLogo />
        <NavAccordionStyled>
          <NavAccordion />
        </NavAccordionStyled>
      </NavDesktopInnerStyled>
    </NavDesktopWrapperStyled>
  );
};

export default NavDesktop;
