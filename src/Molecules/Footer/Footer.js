import propTypes from 'prop-types';
import FooterProfileBtn from '../../Atoms/FooterProfileBtn/FooterProfileBtn';
import { DevsLogo, LogoWrapper, Copy, FooterWrapper } from './FooterStyled';
import logoDevsOnTheWaves from '../../Assets/logoDevsOnTheWaves.svg';

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <LogoWrapper>
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
        </LogoWrapper>
        <FooterProfileBtn />
      </FooterWrapper>
    </>
  );
};

FooterProfileBtn.propTypes = {
  text: propTypes.string,
  active: propTypes.string,
};

export default Footer;
