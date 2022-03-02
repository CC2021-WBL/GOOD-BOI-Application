import { NavLink } from 'react-router-dom';
import { ReactComponent as SettingsSVG } from '../../../Assets/Settings.svg';
import styled from 'styled-components';
import NavLinkStyled from '../NavLinkStyled';

const ProfileLiWithSVG = () => {
  // do przekazania propsy: activeStyle={} text={text} to='' oraz props zmieniajacy style kolorow, np sidebar vs cornermenu
  return (
    <ProfileLiStyled>
      <SettingsSVG />
      <NavLinkStyled to="/settings">Profile</NavLinkStyled>
    </ProfileLiStyled>
  );
};

const ProfileLiStyled = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.primary101};
  gap: 1rem;
  height: 3rem;
  padding: 0 0 0 1rem;
  color: ${({ theme }) => theme.grey400};
  &:hover {
    background: ${({ theme }) => theme.grey00};
    cursor: pointer;
    filter: brightness(0.9);
  }
`;
export default ProfileLiWithSVG;
