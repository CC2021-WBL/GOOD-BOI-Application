import {
  Copy,
  DevsLogo,
  FooterStyled,
} from '../../Molecules/Footer/FooterStyled';
import { FaUserCircle, FaUserCog } from 'react-icons/fa';
import { MdOutlineClose, MdSettings } from 'react-icons/md';

import { BsTrophyFill } from 'react-icons/bs';
import BurgerMenuStyled from './BurgerMenuStyled';
import { GiSittingDog } from 'react-icons/gi';
import HeaderMenuStyled from './HeaderMenuStyled';
import { Link } from 'react-router-dom';
import MenuStyled from './MenuStyled';
import logoDevsOnTheWaves from '../../Assets/logoDevsOnTheWaves.svg';
import propTypes from 'prop-types';

const BurgerMenu = ({ open, setOpen }) => {
  return (
    <BurgerMenuStyled open={open}>
      <HeaderMenuStyled>
        <MdOutlineClose className="x" onClick={() => setOpen(false)} />

        <h3>Menu</h3>
      </HeaderMenuStyled>
      <MenuStyled>
        <Link to="/" className="link">
          <FaUserCircle className="icon" />
          <h6>Profil</h6>
        </Link>
        <Link to="/" className="link">
          <FaUserCog className="icon" />
          <h6>Wybierz rolę</h6>
        </Link>
        <Link to="/" className="link">
          <GiSittingDog className="icon" />
          <h6>Twoje psy</h6>
        </Link>
        <Link to="/" className="link">
          <BsTrophyFill className="icon" />
          <h6>Zawody</h6>
        </Link>
        <Link to="/" className="link">
          <MdSettings className="icon" />
          <h6>Ustawienia</h6>
        </Link>
      </MenuStyled>
      <FooterStyled className="footer">
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
