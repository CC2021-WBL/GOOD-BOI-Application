import FakeButton from '../../Atoms/FakeButton/FakeButton';
import TitleWrapperStyled from './TitleWrapperStyled';

const LandingDesktopTitle = () => {
  return (
    <TitleWrapperStyled>
      <h1>GOOD BOI</h1>
      <h3>portal zrzeszający fanów <br /> dobrych pieskow</h3>
      <FakeButton colors="primary" to="/login" text="Zaloguj się" className="landing-desktop-login"/>
    </TitleWrapperStyled>
  );
};

export default LandingDesktopTitle;
