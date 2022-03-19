import { IoMdSettings } from 'react-icons/io';
import { MdLogout } from 'react-icons/md';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import MenuItem from '../MenuItem/MenuItem';
import MenuItemStyled from '../MenuItem/MenuItemStyled';
import NavCornerMenuStyled from './NavCornerMenuStyled';
import { UserDataContext } from '../../Context/UserDataContext';

const fontsize = '20px'; // icon size

const NavCornerMenu = () => {
  const { dispatch } = useContext(UserDataContext);
  const navigate = useNavigate();

  return (
    <NavCornerMenuStyled>
      <MenuItem
        stylefor="Cornermenu"
        linkTo={`/settings`}
        text="Ustawienia"
        icon={<IoMdSettings fontSize={fontsize} />}
      />
      <MenuItemStyled
        onClick={() => {
          dispatch({ type: 'LOG_OUT', index: 1 });
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
