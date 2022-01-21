import LogoGoodBoi from '../../Atoms/LogoGoodBoi/LogoGoodBoi';
import MainButton from '../../Atoms/MainButton/MainButton';
import LandingPageStyled from './LandingPageStyled';
import Footer from '../../Molecules/Footer/Footer';

const LandingPage = () => {
  return (
    <LandingPageStyled>
      <LogoGoodBoi></LogoGoodBoi>
      <MainButton primary text={'zaloguj się'}></MainButton>
      <MainButton secondary text={'zarejestruj'}></MainButton>
      <MainButton ternary text={'portal good boi'}></MainButton>
      <Footer></Footer>
    </LandingPageStyled>
  );
};

export default LandingPage;
