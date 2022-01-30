import FooterProfileButton from '../../Atoms/FooterProfileButton/FooterProfileButton';
import logoDevsOnTheWaves from '../../Assets/logoDevsOnTheWaves.svg';
import { Copy, DevsLogo, FooterStyled, LogoStyled } from './FooterStyled';

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
      <FooterProfileButton />
    </FooterStyled>
  );
};

export default Footer;
