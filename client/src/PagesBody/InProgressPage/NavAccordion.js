import styled from 'styled-components';
import ProfilePicture from './ProfilePicture';
import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';
import CornerMenuList from './CornerMenuList';
import { useState } from 'react';

const AccordionButton = styled.div`
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
  transition: 1s ease-in-out;
`;

const NavAccordion = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleHandler = () => {
    console.log(menuOpen);
    setMenuOpen(!menuOpen);
    return menuOpen;
  };
  return (
    <>
      <AccordionButton onClick={toggleHandler}>
        <ProfilePicture />
        <div style={{ userSelect: 'none' }}>Witaj, Matylda</div>
        {!menuOpen && <FaChevronDown />}
        {menuOpen && <FaChevronUp />}
      </AccordionButton>
      {menuOpen && (
        <CornerMenuWrapper>
          <CornerMenuList />
        </CornerMenuWrapper>
      )}
    </>
  );
};

export default NavAccordion;
