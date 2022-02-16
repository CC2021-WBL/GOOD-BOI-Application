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
console.log('initHeight: ' + initHeight);
console.log('window.innerHeight: ' + window.innerHeight);
console.log(initHeight !== window.innerHeight);
const Footer = ({ withSettings }) => {
  const { state } = useContext(UserDataContext);
  const { isAuthenticated } = state;
  const height = useWindowHeight();
  if (initHeight === window.innerHeight) {
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
              #Devs on the Waves {height.innerHeight}
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
