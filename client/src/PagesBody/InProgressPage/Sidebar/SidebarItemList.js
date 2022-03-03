import { BsTrophy, BsTrophyFill } from 'react-icons/bs';
import { FaDog, FaUserCircle, FaUsersCog } from 'react-icons/fa';

import MenuItem from './MenuItem';
import { UserDataContext } from '../../../Context/UserDataContext';
import styled from 'styled-components';
import { useContext } from 'react';

const SidebarItemList = () => {
  const { state } = useContext(UserDataContext);
  const { userId } = state;
  const fontsize = '30px';
  return (
    <SidebarItemListStyled>
      <MenuItem
        formolecule="Sidebar"
        linkTo={`/user/${userId}/user-data`}
        text="Profil"
        icon={<FaUserCircle fontSize={fontsize} />}
      />
      <MenuItem
        formolecule="Cornermenu"
        linkTo="/role"
        text="Wybierz rolę"
        icon={<FaUsersCog fontSize={fontsize} />}
      />
      <MenuItem
        formolecule="Sidebar"
        linkTo="/user-dogs"
        text="Twoje psy"
        icon={<FaDog fontSize={fontsize} />}
      />
      <MenuItem
        formolecule="Sidebar"
        linkTo="/contests"
        text="Historia zawodów"
        icon={<BsTrophy fontSize={fontsize} />}
      />
      <MenuItem
        formolecule="Sidebar"
        linkTo="/register"
        text="Zapisz się na zawody"
        icon={<BsTrophyFill fontSize={fontsize} />}
      />
    </SidebarItemListStyled>
  );
};
const SidebarItemListStyled = styled.div`
  display: block;
  margin: 1px;
  padding: 0;
  text-align: left;
`;
export default SidebarItemList;
