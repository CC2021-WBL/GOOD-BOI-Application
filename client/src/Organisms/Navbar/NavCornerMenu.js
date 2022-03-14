import { IoMdSettings } from 'react-icons/io';
import { MdLogout } from 'react-icons/md';
import MenuItem from './MenuItem';
import MenuItemStyled from './MenuItemStyled';
import NavCornerMenuStyled from './NavCornerMenuStyled';
import { UserDataContext } from './../../Context/UserDataContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const fontsize = '20px'; // icon size

const NavCornerMenu = () => {
  const { dispatch } = useContext(UserDataContext);
  const navigate = useNavigate();

  return (
    <NavCornerMenuStyled>
      <MenuItem
        stylefor="Cornermenu"
        linkTo={`/settings`}
        text="Settings"
        icon={<IoMdSettings fontSize={fontsize} />}
      />
      <MenuItemStyled
        style={{ padding: '0 0 0 0.5rem' }}
        onClick={() => {
          dispatch({ type: 'LOG_OUT', index: 1 });
          console.log('clicked logout');
          navigate('/');
        }}
      >
        <MdLogout fontSize={fontsize} />
        Wyloguj
      </MenuItemStyled>
    </NavCornerMenuStyled>
  );
};

export default NavCornerMenu;
