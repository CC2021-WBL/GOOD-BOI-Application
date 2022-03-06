import propTypes from 'prop-types';
import { BiLogOut } from 'react-icons/bi';
import { BsTrophyFill } from 'react-icons/bs';
import { FaUserCircle, FaUserCog } from 'react-icons/fa';
import { GiSittingDog } from 'react-icons/gi';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineClose, MdSettings } from 'react-icons/md';
import { useContext } from 'react';

import BurgerMenuStyled from './BurgerMenuStyled';
import HeaderMenuStyled from './HeaderMenuStyled';
import MenuStyled from './MenuStyled';
import checkLocationForNavRender from '../../Tools/checkLocationForNavRender';
import logoDevsOnTheWaves from '../../Assets/logoDevsOnTheWaves.svg';
import useClickOutside from '../../Hooks/useClickOutside';
import { CONTEST_ACTIONS } from '../../Consts/reducersActions';
import { ContestContext } from '../../Context/ContestContext';
import {
  Copy,
  DevsLogo,
  FooterStyled,
} from '../../Molecules/Footer/FooterStyled';
import { UserDataContext } from '../../Context/UserDataContext';

const BurgerMenu = ({ open, setOpen }) => {
  const { state, dispatch } = useContext(UserDataContext);
  const { contestState, contestDispatch } = useContext(ContestContext);
  const { userId } = state;
  let domNode = useClickOutside(() => {
    setOpen(false);
  });

  const locationPath = useLocation();

  return checkLocationForNavRender(locationPath.pathname) ? (
    <BurgerMenuStyled />
  ) : (
    <BurgerMenuStyled open={open} ref={domNode}>
      <HeaderMenuStyled className="mobile_only">
        <MdOutlineClose className="x" onClick={() => setOpen(false)} />

        <h3>Menu</h3>
      </HeaderMenuStyled>
      <MenuStyled>
        <Link
          to={`/user/${userId}`}
          className="link"
          onClick={() => setOpen(false)}
        >
          <FaUserCircle className="icon" />
          <h6>Profil</h6>
        </Link>
        <Link to="role" className="link" onClick={() => setOpen(false)}>
          <FaUserCog className="icon" />
          <h6>Wybierz rolę</h6>
        </Link>
        <Link
          to="user-dogs"
          className="link"
          onClick={() => {
            setOpen(false);
            if (contestState.contestId || contestState.contestName) {
              contestDispatch({ type: CONTEST_ACTIONS.CLEAR });
            }
          }}
        >
          <GiSittingDog className="icon" />
          <h6>Twoje psy</h6>
        </Link>
        <Link to="/contests" className="link" onClick={() => setOpen(false)}>
          <BsTrophyFill className="icon" />
          <h6>Zawody</h6>
        </Link>
        <Link to="settings" className="link" onClick={() => setOpen(false)}>
          <MdSettings className="icon" />
          <h6>Ustawienia</h6>
        </Link>
        <Link
          to="/"
          className="link"
          onClick={() => {
            setOpen(false);
            dispatch({ type: 'LOG_OUT', index: 1 });
          }}
        >
          <BiLogOut className="icon" />
          <h6 className="log-out">Wyloguj się</h6>
        </Link>
      </MenuStyled>
      <FooterStyled className="footer mobile_only">
        <DevsLogo>
          <img
            className="logo"
            src={logoDevsOnTheWaves}
            alt="logo"
            width="35px"
          />
        </DevsLogo>
        <Copy>
          Copyright <br />
          #Devs on the Waves
        </Copy>
      </FooterStyled>
    </BurgerMenuStyled>
  );
};
BurgerMenu.propTypes = { open: propTypes.bool, setOpen: propTypes.func };
export default BurgerMenu;
