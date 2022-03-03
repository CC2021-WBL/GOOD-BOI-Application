import { IoMdSettings } from 'react-icons/io';
import { MdLogout } from 'react-icons/md';
import MenuItem from './../Sidebar/MenuItem';
import NavCornerMenuStyled from './NavCornerMenuStyled';
import { UserDataContext } from '../../../Context/UserDataContext';
import styled from 'styled-components';
import { useContext } from 'react';

const fontsize = '20px';

const NavCornerMenu = ({ onClick }) => {
  const { dispatch } = useContext(UserDataContext);

  return (
    <NavCornerMenuStyled>
      <MenuItem
        formolecule="Cornermenu"
        linkTo={`/settings`}
        text="Settings"
        icon={<IoMdSettings fontSize={fontsize} />}
      />
      <MenuItem
        formolecule="Cornermenu"
        linkTo={`/`}
        text="Wyloguj"
        icon={
          <MdLogout
            fontSize={fontsize}
            onClick={() => {
              dispatch({ type: 'LOG_OUT', index: 1 });
            }}
          />
        }
      />
    </NavCornerMenuStyled>
  );
};

export default NavCornerMenu;
