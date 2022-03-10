import propTypes from 'prop-types';
import { useContext } from 'react';

import FooterLinks from './FooterLinks';
import FooterProfileButton from '../../Atoms/FooterProfileButton/FooterProfileButton';
import GridWrapper from '../../Templates/Layout/GridWrapper';
import LinkWithDevsLogo from './LinkWithDevsLogo';
import RocketWithPlanets from '../../Molecules/RocketWithPlanets/RocketWithPlanets';
import useWindowHeight from '../../Tools/useWindowHeight';
import { FooterStyled } from './FooterStyled';
import { UserDataContext } from '../../Context/UserDataContext';

let initHeight = window.innerHeight;

const Footer = ({ withSettings }) => {
  const { state } = useContext(UserDataContext);
  const { isAuthenticated } = state;
  const height = useWindowHeight();

  // TODO: Footer must also hide when mobile is turned and virtual keyboard popps up
  return (
    <GridWrapper mobile="4 / 1 / 5 / 2" tablet="4 / 1 / 5 / -1">
      <FooterStyled className="non-mobile-wrapper">
        <FooterStyled className="non-mobile">
          <RocketWithPlanets />
          <LinkWithDevsLogo />
          <FooterLinks />
        </FooterStyled>
      </FooterStyled>
      {Math.abs(initHeight - height.height) <= 150 && (
        <FooterStyled className="mobile">
          <LinkWithDevsLogo />
          {withSettings ? (
            <FooterProfileButton withSettings />
          ) : (
            isAuthenticated && <FooterProfileButton />
          )}
          <RocketWithPlanets />
        </FooterStyled>
      )}
    </GridWrapper>
  );
};

Footer.propTypes = {
  withSettings: propTypes.bool,
  mobile: propTypes.bool,
};

export default Footer;
