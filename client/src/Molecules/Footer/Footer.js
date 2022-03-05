import { Copy, DevsLogo, FooterStyled, LogoStyled } from './FooterStyled';

import FooterDesktop from './FooterDesktop';
import FooterProfileButton from '../../Atoms/FooterProfileButton/FooterProfileButton';
import GridWrapper from '../../Styles/GridWrapper';
import { UserDataContext } from '../../Context/UserDataContext';
import logoDevsOnTheWaves from '../../Assets/logoDevsOnTheWaves.svg';
import propTypes from 'prop-types';
import { useContext } from 'react';
import useWindowHeight from '../../Tools/useWindowHeight';

const initHeight = window.innerHeight;

const Footer = ({ withSettings }) => {
  const { state } = useContext(UserDataContext);
  const { isAuthenticated } = state;
  const height = useWindowHeight();

  // windows.innerHeight changes when virtual keyboard popping up, when so - hide the footer
  if (Math.abs(initHeight - height.height) <= 500) {
    return (
      <GridWrapper mobile="4 / 1 / 5 / 2" tablet="4 / 1 / 5 / -1" navFoot>
        <FooterDesktop />
        <FooterStyled className="mobile_only">
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
