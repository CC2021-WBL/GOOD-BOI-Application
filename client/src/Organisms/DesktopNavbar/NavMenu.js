import { useRef, useState } from 'react';

import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';
import NavButtonWrapper from './NavButtonWrapper';
import NavCornerMenu from './NavCornerMenu';
import NavCornerMenuWrapper from './NavCornerMenuWrapper';
import NavMenuStyled from './NavMenuStyled';
import ProfilePicture from './ProfilePicture';
import useClickOutside from '../../Hooks/useClickOutside';

const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleHandler = () => {
    setMenuOpen(!menuOpen);
  };

  let domNode = useClickOutside(() => {
    setMenuOpen(false);
  });

  return (
    <NavMenuStyled>
      <NavButtonWrapper ref={domNode} onClick={toggleHandler}>
        <ProfilePicture />
        <div style={{ userSelect: 'none' }}>Witaj, Matylda</div>
        {!menuOpen && <FaChevronDown />}
        {menuOpen && <FaChevronUp />}
      </NavButtonWrapper>
      <NavCornerMenuWrapper className={menuOpen ? 'open' : 'close'}>
        <NavCornerMenu onClick={() => setMenuOpen(false)} />
      </NavCornerMenuWrapper>
    </NavMenuStyled>
  );
};

export default NavMenu;
