import propTypes from 'prop-types';

import FooterProfileButton from '../../Atoms/FooterProfileButton/FooterProfileButton';
import logoDevsOnTheWaves from '../../Assets/logoDevsOnTheWaves.svg';
import { Copy, DevsLogo, FooterStyled, LogoStyled } from './FooterStyled';

const Footer = ({ withSettings }) => {
  return (
    <FooterStyled>
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

      {withSettings ? (
        <FooterProfileButton withSettings />
      ) : (
        <FooterProfileButton />
      )}
    </FooterStyled>
  );
};

Footer.propTypes = {
  withSettings: propTypes.bool,
};

export default Footer;
