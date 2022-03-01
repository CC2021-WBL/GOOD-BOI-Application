import { NavLink, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';

import { ReactComponent as AppLogoSVG } from '../../Assets/AppLogoSVG.svg';
import ButtonsWrapperStyled from './ButtonsWrapperStyled';
import FakeButton from './../../Atoms/FakeButton/FakeButton';
import GoodBoiLogo from './GoodBoiLogo';
import NavAccordion from './NavAccordion';
import NavAccordionStyled from './NavAccordionStyled';
import NavDesktopInnerStyled from './NavDesktopInnerStyled';
import NavDesktopWrapperStyled from './NavDesktopWrapperStyled';
import { UserDataContext } from './../../Context/UserDataContext';

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
  // when logged in:
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
