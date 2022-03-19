import propTypes from 'prop-types';
import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';

import ProfilePicture from '../../Atoms/ProfilePicture/ProfilePicture';

const NavButtonStyled = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 1rem 0 0;
  border-radius: 1.5625rem 0.625rem 0.625rem 1.5625rem;
  gap: 1rem;
  transition: all 0.2s ease-in-out;
  :hover {
    background-color: rgba(230, 230, 230, 0.5);
  }
`;

const NavButton = ({ menuOpen }) => {
  return (
    <NavButtonStyled>
      <ProfilePicture />
      <div style={{ userSelect: 'none', whiteSpace: 'nowrap' }}>
        Witaj, Matylda
      </div>
      {!menuOpen && <FaChevronDown />}
      {menuOpen && <FaChevronUp />}
    </NavButtonStyled>
  );
};

NavButton.propTypes = {
  menuOpen: propTypes.bool,
};
export default NavButton;
