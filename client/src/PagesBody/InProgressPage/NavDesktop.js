import { ReactComponent as AppLogoSVG } from '../../Assets/AppLogoSVG.svg';
import ButtonsWrapperStyled from './ButtonsWrapperStyled';
import MainButton from './../../Atoms/MainButton/MainButton';
import NavDesktopWrapperStyled from './NavDesktopWrapperStyled';
import { NavLink } from 'react-router-dom';
import NavMenuSelectField from './NavMenuSelectField';
import { UserDataContext } from './../../Context/UserDataContext';
import { useContext } from 'react';

const NavDesktop = () => {
  const { state, dispatch } = useContext(UserDataContext);
  const { userId, roles, isAuthenticated } = state;
  if (!isAuthenticated) {
    return (
      <NavDesktopWrapperStyled>
        <AppLogoSVG />
        <NavLink
          exact
          to="/login"
          style={({ isActive }) => ({
            color: isActive ? 'black' : 'grey',
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          STRONA GŁÓWNA
        </NavLink>
        <NavLink
          to="/register"
          style={({ isActive }) => ({
            color: isActive ? 'black' : 'grey',
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          AKTUALNE KONKURSY
        </NavLink>
        <NavLink
          to="/in-progress"
          style={({ isActive }) => ({
            color: isActive ? 'black' : 'grey',
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          WEŹ UDZIAŁ W ZAWODACH
        </NavLink>
        <ButtonsWrapperStyled>
          <MainButton ternary text="zarejestruj" />
          <MainButton primary text="zaloguj" />
        </ButtonsWrapperStyled>
      </NavDesktopWrapperStyled>
    );
  }
  return (
    <NavDesktopWrapperStyled>
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          alignItems: 'center',
          gap: '2rem',
          left: '2rem',
        }}
      >
        <AppLogoSVG />
        GOOD BOI APP
      </div>
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          position: 'absolute',
          right: '1rem',
        }}
      >
        <NavMenuSelectField />
      </div>
    </NavDesktopWrapperStyled>
  );
};

export default NavDesktop;
