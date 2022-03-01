import { useRef, useState } from 'react';

import CornerMenuList from './CornerMenuList';
import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';
import ProfilePicture from './ProfilePicture';
import styled from 'styled-components';
import useClickOutside from '../../Hooks/useClickOutside';

const AccordionButtonWrapper = styled.div`
  height: 61px;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  background: ${({ theme }) => theme.grey00};
  &:hover {
    border-radius: 25px;
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

const CornerMenuWrapper = styled.div`
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

const NavAccordion = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleHandler = () => {
    setMenuOpen(!menuOpen);
  };

  let domNode = useClickOutside(() => {
    setMenuOpen(false);
  });

  return (
    <>
      <AccordionButtonWrapper ref={domNode} onClick={toggleHandler}>
        <ProfilePicture />
        <div style={{ userSelect: 'none' }}>Witaj, Matylda</div>
        {!menuOpen && <FaChevronDown />}
        {menuOpen && <FaChevronUp />}
      </AccordionButtonWrapper>
      <CornerMenuWrapper className={menuOpen ? 'open' : 'close'}>
        <CornerMenuList onClick={() => setMenuOpen(false)} />
      </CornerMenuWrapper>
    </>
  );
};

export default NavAccordion;
