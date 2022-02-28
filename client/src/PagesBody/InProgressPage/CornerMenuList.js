import SettingsLiWithSVG from './SettingsLiWithSVG';
import LogoutLiWithSVG from './LogoutLiWithSVG';
import styled from 'styled-components';

const CornerMenuList = () => {
  return (
    <CornerMenuListStyled>
      <SettingsLiWithSVG />
      <LogoutLiWithSVG />
    </CornerMenuListStyled>
  );
};
const CornerMenuListStyled = styled.div`
  text-align: left;
`;
export default CornerMenuList;
