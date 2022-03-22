import styled from 'styled-components';
import { useContext, useState } from 'react';

import GoodBoiLogo from '../../Molecules/GoodBoiLogo/GoodBoiLogo';
import NavButton from '../../Molecules/NavButton/NavButton';
import NavButtonWrapper from '../../Molecules/NavButton/NavButtonWrapper';
import NavButtons from '../../Molecules/NavButtons/NavButtons';
import NavCornerMenu from '../../Molecules/NavCornerMenu/NavCornerMenu';
import NavCornerMenuWrapper from '../../Molecules/NavCornerMenu/NavCornerMenuWrapper';
import NavInnerStyled from './NavInnerStyled';
import NavLinkStyled from '../../Atoms/NavLinkStyled/NavLinkStyled';
import useClickOutside from '../../Hooks/useClickOutside';
import { ReactComponent as AppLogoSVG } from '../../Assets/AppLogoSVG.svg';
import { UserDataContext } from '../../Context/UserDataContext';

const NavBackground = styled.header`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.grey00};
`;

const Nav = () => {
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
      <NavBackground>
        <NavInnerStyled>
          <GoodBoiLogo />
          <NavButtonWrapper ref={domNode} onClick={toggleHandler}>
            <NavButton menuOpen={menuOpen} />
            <NavCornerMenuWrapper className={menuOpen ? 'open' : 'close'}>
              <NavCornerMenu />
            </NavCornerMenuWrapper>
          </NavButtonWrapper>
        </NavInnerStyled>
      </NavBackground>
    );
  } else {
    // when not logged in
    return (
      <NavBackground>
        <NavInnerStyled>
          <NavLinkStyled to="/" style={{ flex: '1', paddingRight: '1rem' }}>
            <AppLogoSVG />
          </NavLinkStyled>
          <NavLinkStyled to="/" stylefor="Navbar">
            STRONA GŁÓWNA
          </NavLinkStyled>
          <NavLinkStyled to="/contests" stylefor="Navbar">
            AKTUALNE KONKURSY
          </NavLinkStyled>
          <NavButtons />
        </NavInnerStyled>
      </NavBackground>
    );
  }
};

export default Nav;
