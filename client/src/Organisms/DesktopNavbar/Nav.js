import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

import ButtonsWrapperStyled from './ButtonsWrapperStyled';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import GoodBoiLogo from './GoodBoiLogo';
import NavButtonWrapper from './NavButtonWrapper';
import NavCornerMenu from './NavCornerMenu';
import NavCornerMenuWrapper from './NavCornerMenuWrapper';
import NavInnerStyled from './NavInnerStyled';
import NavLinkStyled from './NavLinkStyled';
import ProfilePicture from './ProfilePicture';
import useClickOutside from './../../Hooks/useClickOutside';
import { ReactComponent as AppLogoSVG } from '../../Assets/AppLogoSVG.svg';
import { UserDataContext } from '../../Context/UserDataContext';

// import NavMenu from './NavMenu';

const Nav = () => {
  const location = useLocation();
  const { state } = useContext(UserDataContext);
  const { isAuthenticated } = state;

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleHandler = () => {
    setMenuOpen(!menuOpen);
  };

  let domNode = useClickOutside(() => {
    setMenuOpen(false);
  });

  // when logged in:
  if (isAuthenticated) {
    return (
      <>
        <NavInnerStyled>
          <GoodBoiLogo />
          <NavButtonWrapper
            classwName="button-wrapper"
            ref={domNode}
            onClick={toggleHandler}
          >
            <ProfilePicture />
            <div style={{ userSelect: 'none', whiteSpace: 'nowrap' }}>
              Witaj, Matylda
            </div>
            {!menuOpen && <FaChevronDown />}
            {menuOpen && <FaChevronUp />}
            <NavCornerMenuWrapper className={menuOpen ? 'open' : 'close'}>
              <NavCornerMenu />
            </NavCornerMenuWrapper>
          </NavButtonWrapper>
        </NavInnerStyled>
      </>
    );
  } else {
    // when not logged in
    return (
      <>
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
      </>
    );
  }
};

export default Nav;
