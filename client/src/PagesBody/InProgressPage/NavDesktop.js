import { ReactComponent as AppLogoSVG } from '../../Assets/AppLogoSVG.svg';
import ButtonsWrapperStyled from './ButtonsWrapperStyled';
import MainButton from './../../Atoms/MainButton/MainButton';
import NavDesktopInnerStyled from './NavDesktopInnerStyled';
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
        <NavDesktopInnerStyled>
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
            to="/contests"
            style={({ isActive }) => ({
              color: isActive ? 'black' : 'grey',
              fontWeight: isActive ? 'bold' : 'normal',
            })}
          >
            AKTUALNE KONKURSY
          </NavLink>
          <NavLink
            to="/register"
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
        </NavDesktopInnerStyled>
      </NavDesktopWrapperStyled>
    );
  }
  return (
    <NavDesktopWrapperStyled>
      <NavDesktopInnerStyled>
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            alignItems: 'center',
            gap: '2rem',
            left: '5rem',
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
            right: '10rem',
          }}
        >
          <NavMenuSelectField />
        </div>
      </NavDesktopInnerStyled>
    </NavDesktopWrapperStyled>
  );
};

export default NavDesktop;
