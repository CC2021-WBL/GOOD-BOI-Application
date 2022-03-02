import styled from 'styled-components';
// import SettingsLiWithSVG from './../SettingsLiWithSVG';
// import LogoutLiWithSVG from './../LogoutLiWithSVG';
import ProfileLiWithSVG from './ProfileLiWithSVG';
import { useContext } from 'react';
import { device } from '../../../Consts/devices';
import { UserDataContext } from './../../../Context/UserDataContext';

const Sidebar = () => {
  //   const location = useLocation();
  const { state, dispatch } = useContext(UserDataContext);
  const { userId, roles, isAuthenticated } = state;
  if (isAuthenticated) {
    return (
      <SidebarStyled>
        <ProfileLiWithSVG />
        <ProfileLiWithSVG />
        <ProfileLiWithSVG />
        <ProfileLiWithSVG />
        <ProfileLiWithSVG />
      </SidebarStyled>
    );
  } else return null;
};

const SidebarStyled = styled.div`
  text-align: left;
  display: none;

  @media only screen and (${device.tablet}) {
    display: grid;
    grid-area: 3 / 1 / 4 / 2;
    overflow: scroll;
    border: 2px solid ${({ theme }) => theme.grey200}; // ?
    width: calc(100%-1rem);
    height: calc(100%-1rem);
    margin: 0.5rem;
  }
  @media only screen and (${device.desktop}) {
    display: grid;
    grid-area: 3 / 1 / 4 / 2;
    overflow: scroll;
    border: 2px solid ${({ theme }) => theme.grey200}; // ?
    width: calc(100%-1rem);
    height: calc(100%-1rem);
    margin: 0.5rem;
  }
`;

export default Sidebar;
