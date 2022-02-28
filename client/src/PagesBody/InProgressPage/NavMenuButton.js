import CornerMenuStyled from './CornerMenuStyled';
import { FaChevronDown } from 'react-icons/fa';
import { ReactComponent as Logout } from '../../Assets/Logout.svg';
import NavMenuButtonStyled from './NavMenuButtonStyled';
import { ReactComponent as SettingsSVG } from '../../Assets/Settings.svg';
import styled from 'styled-components';

const CornerMenuList = styled.div`
  text-align: left;
  .settings:hover {
    background: #eee;
    cursor: pointer;
  }
  .logout:hover {
    background: #eee;
    cursor: pointer;
  }
`;
const Input = styled.input`
  display: 'flex';
  align-items: 'center';
  opacity: 0.1;
  border: 1px solid black;
  color: red;
  #chbx:checked ~ .settings {
    opacity: 0;
  }
`;

const NavMenuButton = () => {
  return (
    <NavMenuButtonStyled>
      <div className="button">
        <div className="profilePicture"></div>
        <label for="chbx">
          Witaj, Matylda
          <Input type="checkbox" id="chbx"></Input>
        </label>
        <div class="arrow">{/* <FaChevronDown /> */} ^</div>
      </div>
      <CornerMenuStyled className="cornerMenuItems">
        <CornerMenuList>
          <div
            className="settings"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              height: '3rem',
              padding: '0 0 0 1rem',
            }}
          >
            <SettingsSVG />
            Ustawienia
          </div>
          <div
            className="logout"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              height: '3rem',
              padding: '0 0 0 1rem',
            }}
          >
            <Logout />
            Wyloguj
          </div>
        </CornerMenuList>
      </CornerMenuStyled>
    </NavMenuButtonStyled>
  );
};

export default NavMenuButton;
