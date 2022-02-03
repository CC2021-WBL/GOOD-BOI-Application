import {
  Copy,
  DevsLogo,
  FooterStyled,
} from '../../Molecules/Footer/FooterStyled';
import { FaUserCircle, FaUserCog } from 'react-icons/fa';
import { MdOutlineClose, MdSettings } from 'react-icons/md';

import { BsTrophy } from 'react-icons/bs';
import BurgerMenuStyled from './BurgerMenuStyled';
import HeaderMenuStyled from './HeaderMenuStyled';
import { Link } from 'react-router-dom';
import MenuStyled from './MenuStyled';
import { SiDatadog } from 'react-icons/si';
import logoDevsOnTheWaves from '../../Assets/logoDevsOnTheWaves.svg';

// import { icons } from 'react-icons/lib';

const BurgerMenu = () => {
  return (
    <BurgerMenuStyled>
      <HeaderMenuStyled>
        <MdOutlineClose className="x" />

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
          <SiDatadog className="icon" />
          <h6>Twoje psy</h6>
        </Link>
        <Link to="/" className="link">
          <BsTrophy className="icon" />
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

export default BurgerMenu;
