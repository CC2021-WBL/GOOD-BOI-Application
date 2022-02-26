import { Copy, DevsLogo, FooterStyled, LogoStyled } from './FooterStyled';

import FooterProfileButton from '../../Atoms/FooterProfileButton/FooterProfileButton';
import { UserDataContext } from '../../Context/UserDataContext';
import logoDevsOnTheWaves from '../../Assets/logoDevsOnTheWaves.svg';
import propTypes from 'prop-types';
import { useContext } from 'react';
import useWindowHeight from '../../Tools/useWindowHeight';

const initHeight = window.innerHeight;

const Footer = ({ withSettings }) => {
  const { state } = useContext(UserDataContext);
  // eslint-disable-next-line
  const { isAuthenticated } = state;
  const height = useWindowHeight();

  // windows.innerHeight changes when virtual keyboard popping up, when so - hide the footer
  if (Math.abs(initHeight - height.height) <= 150) {
    return (
      <FooterStyled>
        <a
          href="https://github.com/CC2021-WBL"
          target="_blank"
          rel="noreferrer"
        >
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
  } else return '';
};

Footer.propTypes = {
  withSettings: propTypes.bool,
};

export default Footer;
