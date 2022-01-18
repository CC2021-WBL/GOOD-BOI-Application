import LogoGoodBoi from '../../Atoms/LogoGoodBoi/LogoGoodBoi';
import MainButton from '../../Atoms/MainButton/MainButton';
import LandingPageStyled from './LandingPageStyled';

const LandingPage = () => {
  return (
    <LandingPageStyled>
      <LogoGoodBoi></LogoGoodBoi>
      <MainButton primary text={'zaloguj się'}></MainButton>
      <MainButton secondary text={'zarejestruj'}></MainButton>
      <MainButton ternary text={'portal good boi'}></MainButton>
    </LandingPageStyled>
  );
};

export default LandingPage;
