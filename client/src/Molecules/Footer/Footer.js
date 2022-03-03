import propTypes from 'prop-types';
import { useContext } from 'react';

import FooterProfileButton from '../../Atoms/FooterProfileButton/FooterProfileButton';
import GridWrapper from '../../Styles/GridWrapper';
import logoDevsOnTheWaves from '../../Assets/logoDevsOnTheWaves.svg';
import useWindowHeight from '../../Tools/useWindowHeight';
import { Copy, DevsLogo, FooterStyled, LogoStyled } from './FooterStyled';
import { UserDataContext } from '../../Context/UserDataContext';

const initHeight = window.innerHeight;

const Footer = ({ withSettings }) => {
  const { state } = useContext(UserDataContext);
  const { isAuthenticated } = state;
  const height = useWindowHeight();

  // windows.innerHeight changes when virtual keyboard popping up, when so - hide the footer
  if (Math.abs(initHeight - height.height) <= 500) {
    return (
      <GridWrapper mobile="4/5" tablet="4/5"   style={{borderTop: '2px solid blue'}}      >
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
      </GridWrapper>
    );
  } else return '';
};

Footer.propTypes = {
  withSettings: propTypes.bool,
};

export default Footer;
