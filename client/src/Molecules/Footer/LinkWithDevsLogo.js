import logoDevsOnTheWaves from '../../Assets/logoDevsOnTheWaves.svg';
import { Copy } from './FooterStyled';
import { DevsLogo, LogoStyled } from './FooterStyled';

const LinkWithDevsLogo = () => {
  return (
    <a href="https://github.com/CC2021-WBL" target="_blank" rel="noreferrer">
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
    </a>
  );
};

export default LinkWithDevsLogo;
