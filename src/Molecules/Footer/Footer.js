import { Copy, DevsLogo, FooterStyled, LogoStyled } from './FooterStyled';
import { useContext, useEffect, useState } from 'react';

import FooterProfileButton from '../../Atoms/FooterProfileButton/FooterProfileButton';
import { UserDataContext } from '../../Context/UserDataContext';
import logoDevsOnTheWaves from '../../Assets/logoDevsOnTheWaves.svg';
import propTypes from 'prop-types';

const initHeight = window.innerHeight;

function useWindowHeight() {
  const [windowHeight, setWindowHeight] = useState({
    height: window.innerHeight,
  });
  useEffect(() => {
    function handleResize() {
      setWindowHeight({
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowHeight;
}
const Footer = ({ withSettings }) => {
  const { state } = useContext(UserDataContext);
  const { isAuthenticated } = state;
  const height = useWindowHeight();

  // windows.innerHeight changes when virtual keyboard popping up, when so - hide the footer
  if (Math.abs(initHeight - height.height) <= 200) {
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
