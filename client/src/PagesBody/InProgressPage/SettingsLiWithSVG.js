import { ReactComponent as SettingsSVG } from '../../Assets/Settings.svg';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const SettingsLiWithSVG = () => {
  return (
    <SettingsLiStyled>
      <SettingsSVG />
      <a href="/settings">Ustawienia</a>
    </SettingsLiStyled>
  );
};

const SettingsLiStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 3rem;
  padding: 0 0 0 1rem;
  &:hover {
    background: ${({ theme }) => theme.grey00};
    cursor: pointer;
    filter: brightness(0.9);
  }
`;
export default SettingsLiWithSVG;
