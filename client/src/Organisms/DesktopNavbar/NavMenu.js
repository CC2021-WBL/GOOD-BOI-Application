import { useRef, useState } from 'react';

import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';
import NavCornerMenu from './NavCornerMenu';
import NavMenuStyled from './NavMenuStyled';
import ProfilePicture from './ProfilePicture';
import styled from 'styled-components';
import useClickOutside from '../../Hooks/useClickOutside';

const NavButtonWrapper = styled.div`
  height: 61px;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  background: ${({ theme }) => theme.grey00};
  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

const NavCornerMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: -7.5rem;
  width: 100%;
  background: ${({ theme }) => theme.grey00};
  transition: all 0.2s ease-in-out;
  transform-origin: 0 0;
  &.close {
    transform: scale(1, 0);
  }
  &.open {
    transform: scale(1, 1);
  }
`;

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
