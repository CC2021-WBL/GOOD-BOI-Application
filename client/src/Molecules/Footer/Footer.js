import propTypes from 'prop-types';
import { useContext } from 'react';

import FooterProfileButton from '../../Atoms/FooterProfileButton/FooterProfileButton';
import logoDevsOnTheWaves from '../../Assets/logoDevsOnTheWaves.svg';
import { Copy, DevsLogo, FooterStyled, LogoStyled } from './FooterStyled';
import { UserDataContext } from '../../Context/UserDataContext';

const Footer = ({ withSettings }) => {
  const { state } = useContext(UserDataContext);
  const { isAuthenticated } = state;
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
        isAuthenticated && <FooterProfileButton />
      )}
    </FooterStyled>
  );
};

Footer.propTypes = {
  withSettings: propTypes.bool,
};

export default Footer;
