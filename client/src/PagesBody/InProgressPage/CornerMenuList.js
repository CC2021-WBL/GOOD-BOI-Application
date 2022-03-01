import LogoutLiWithSVG from './LogoutLiWithSVG';
import SettingsLiWithSVG from './SettingsLiWithSVG';
import styled from 'styled-components';

const CornerMenuList = ({ onClick }) => {
  return (
    <CornerMenuListStyled onClick={onClick}>
      <SettingsLiWithSVG />
      <LogoutLiWithSVG />
    </CornerMenuListStyled>
  );
};
const CornerMenuListStyled = styled.div`
  text-align: left;
`;
export default CornerMenuList;
