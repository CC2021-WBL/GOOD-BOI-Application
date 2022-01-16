import propTypes from 'prop-types';
import FooterProfileBtn from '../../Atoms/FooterProfileBtn/FooterProfileBtn';
import { Logo, LogoWrapper, Copy, Wrapper } from './FooterStyled';
import logoDevsOnTheWaves from '../../Assets/logoDevsOnTheWaves.svg';

const Footer = () => {
  return (
    <>
      <Wrapper>
        <LogoWrapper>
          <Logo>
            <img
              className="logo"
              src={logoDevsOnTheWaves}
              alt="logo"
              width="35px"
            />
          </Logo>
          <Copy>
            Copyright <br />
            #Devs on the Waves
          </Copy>
        </LogoWrapper>
        <FooterProfileBtn />
      </Wrapper>
    </>
  );
};

FooterProfileBtn.propTypes = {
  text: propTypes.string,
  active: propTypes.string,
};

export default Footer;
