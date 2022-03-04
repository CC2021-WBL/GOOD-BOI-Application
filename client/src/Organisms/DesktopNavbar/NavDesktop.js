import { ReactComponent as AppLogoSVG } from '../../Assets/AppLogoSVG.svg';
import ButtonsWrapperStyled from './ButtonsWrapperStyled';
import FakeButton from './../../Atoms/FakeButton/FakeButton';
import GoodBoiLogo from './GoodBoiLogo';
import NavInnerStyled from './NavInnerStyled';
import NavLinkStyled from './NavLinkStyled';
import NavMenu from './NavMenu';
import { UserDataContext } from '../../Context/UserDataContext';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

const NavDesktop = () => {
  const location = useLocation();
  const { state } = useContext(UserDataContext);
  const { isAuthenticated } = state;

  // when logged in:
  if (isAuthenticated) {
    return (
      <NavInnerStyled>
        <GoodBoiLogo />
        <NavMenu />
      </NavInnerStyled>
    );
  } else {
    // when not logged in
    return (
      <NavInnerStyled>
        <NavLinkStyled to="/">
          <AppLogoSVG />
        </NavLinkStyled>
        <NavLinkStyled to="/login" stylefor="Navbar">
          STRONA GŁÓWNA
        </NavLinkStyled>
        <NavLinkStyled to="/contests" stylefor="Navbar">
          AKTUALNE KONKURSY
        </NavLinkStyled>
        <NavLinkStyled to="/register" stylefor="Navbar">
          WEŹ UDZIAŁ W ZAWODACH
        </NavLinkStyled>
        <ButtonsWrapperStyled>
          {location.pathname !== '/register' && (
            <FakeButton to="/register" colors="ternary" text="Zarejestruj" />
          )}
          {location.pathname !== '/login' && (
            <FakeButton to="/login" colors="primary" text="Zaloguj się" />
          )}
        </ButtonsWrapperStyled>
      </NavInnerStyled>
    );
  }
};

export default NavDesktop;
