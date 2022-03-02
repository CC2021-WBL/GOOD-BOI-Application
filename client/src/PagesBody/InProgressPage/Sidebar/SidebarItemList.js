import styled from 'styled-components';
import { ReactComponent as SettingsSVG } from '../../Assets/Settings.svg';
import ProfileLiWithSVG from './ProfileLiWithSVG';

// icons:
const settingsIcon = (icon) => <SettingsSVG />;

const CornerMenuList = () => {
  return (
    <CornerMenuListStyled>
      <ProfileLiWithSVG icon={settingsIcon} />
      {/* <RoleLiWithSVG />
      <YourDogsLiWithSVG />
      <HistoryLiWithSVG />
      <RegisterLiWithSVG /> */}
    </CornerMenuListStyled>
  );
};
const CornerMenuListStyled = styled.div`
  text-align: left;
  background: red;
  height: 200px;
  width: 200px;
  display: grid;
`;
export default CornerMenuList;
