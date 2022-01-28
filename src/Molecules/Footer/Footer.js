import { DevsLogo, LogoStyled, Copy, FooterStyled } from './FooterStyled';
import logoDevsOnTheWaves from '../../Assets/logoDevsOnTheWaves.svg';
import FooterProfileButton from '../../Atoms/FooterProfileButton/FooterProfileButton';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <FooterStyled>
      <LogoStyled>
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
      </LogoStyled>
      <Link to="profile" style={{ textDecoration: 'none' }}>
        <FooterProfileButton />
      </Link>
    </FooterStyled>
  );
};

export default Footer;
