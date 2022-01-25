import LogoGoodBoi from '../../Atoms/LogoGoodBoi/LogoGoodBoi';
import MainButton from '../../Atoms/MainButton/MainButton';
import LandingPageStyled from './LandingPageStyled';
import Footer from '../../Molecules/Footer/Footer';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <LandingPageStyled>
      <LogoGoodBoi></LogoGoodBoi>
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <MainButton primary text={'zaloguj się'} />
      </Link>
      <Link to="/register" style={{ textDecoration: 'none' }}>
        <MainButton secondary text={'zarejestruj'} />
      </Link>
      <MainButton ternary text={'portal good boi'} />
      <Footer></Footer>
    </LandingPageStyled>
  );
};

export default LandingPage;
