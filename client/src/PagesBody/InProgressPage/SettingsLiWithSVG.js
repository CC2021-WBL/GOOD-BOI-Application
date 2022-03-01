import { NavLink } from 'react-router-dom';
import { ReactComponent as SettingsSVG } from '../../Assets/Settings.svg';
import styled from 'styled-components';

const SettingsLiWithSVG = () => {
  return (
    <SettingsLiStyled>
      <SettingsSVG />
      <NavLink
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          color: `inherit`,
        }}
        to="/settings"
      >
        Ustawienia
      </NavLink>
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
