import { BsTrophy, BsTrophyFill } from 'react-icons/bs';
import { FaDog, FaUserCircle, FaUsersCog } from 'react-icons/fa';
import { useContext } from 'react';

import MenuItem from '../../Molecules/MenuItem/MenuItem';
import SidebarItemsStyled from './SidebarItemsStyled';
import SidebarStyled from './SidebarStyled';
import { UserDataContext } from './../../Context/UserDataContext';

const Sidebar = () => {
  const { state } = useContext(UserDataContext);
  const { isAuthenticated, userId } = state;
  const fontsize = '30px';

  if (isAuthenticated) {
    return (
      <SidebarStyled>
        <SidebarItemsStyled>
          <MenuItem
            stylefor="Sidebar"
            linkTo={`/user/${userId}`}
            text="Profil"
            icon={<FaUserCircle fontSize={fontsize} />}
          />
          <MenuItem
            stylefor="Sidebar"
            linkTo="/role"
            text="Wybierz rolę"
            icon={<FaUsersCog fontSize={fontsize} />}
          />
          <MenuItem
            stylefor="Sidebar"
            linkTo="/user-dogs"
            text="Twoje psy"
            icon={<FaDog fontSize={fontsize} />}
          />
          <MenuItem
            stylefor="Sidebar"
            linkTo="/contests"
            state={{ contestContent: 'results' }}
            text="Historia zawodów"
            icon={<BsTrophy fontSize={fontsize} />}
          />
          <MenuItem
            stylefor="Sidebar"
            linkTo="/future-contests"
            state={{ contestContent: 'future' }}
            text="Zapisz się na zawody"
            icon={<BsTrophyFill fontSize={fontsize} />}
          />
        </SidebarItemsStyled>
      </SidebarStyled>
    );
  } else return null;
};

export default Sidebar;
