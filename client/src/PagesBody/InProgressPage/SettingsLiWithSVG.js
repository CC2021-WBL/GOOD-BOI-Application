import NavLinkStyled from './NavLinkStyled';
import { ReactComponent as SettingsSVG } from '../../Assets/Settings.svg';
import styled from 'styled-components';

const SettingsLiWithSVG = () => {
  return (
    <SettingsLiStyled>
      <SettingsSVG />
      <NavLinkStyled to="/settings">Ustawienia</NavLinkStyled>
    </SettingsLiStyled>
  );
};

const SettingsLiStyled = styled.div`
  display: flex;

  align-items: center;
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
export default SettingsLiWithSVG;
