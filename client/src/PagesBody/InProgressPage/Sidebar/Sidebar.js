import SidebarItemList from './SidebarItemList';
import { UserDataContext } from './../../../Context/UserDataContext';
import { device } from '../../../Consts/devices';
import styled from 'styled-components';
import { useContext } from 'react';

const Sidebar = () => {
  const { state, dispatch } = useContext(UserDataContext);
  const { userId, roles, isAuthenticated } = state;
  if (isAuthenticated) {
    return (
      <SidebarStyled>
        <SidebarItemList />
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
    border: 1px solid ${({ theme }) => theme.grey200}; // ?
    width: calc(100%-1rem);
    height: calc(100%-1rem);
  }
  @media only screen and (${device.desktop}) {
    display: grid;
    grid-area: 3 / 1 / 4 / 2;
    border: 2px solid ${({ theme }) => theme.grey200}; // ?
    width: calc(100%-1rem);
    height: calc(100%-1rem);
  }
`;

export default Sidebar;
