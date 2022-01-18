import { DevsLogo, LogoStyled, Copy, FooterStyled } from './FooterStyled';
import logoDevsOnTheWaves from '../../Assets/logoDevsOnTheWaves.svg';
import FooterProfileButton from '../../Atoms/FooterProfileButton/FooterProfileButton';

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
