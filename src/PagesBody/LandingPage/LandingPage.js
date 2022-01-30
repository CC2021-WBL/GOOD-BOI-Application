import LogoGoodBoi from '../../Atoms/LogoGoodBoi/LogoGoodBoi';
import MainButton from '../../Atoms/MainButton/MainButton';
import Footer from '../../Molecules/Footer/Footer';
import { Link } from 'react-router-dom';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';

const LandingPage = () => {
  return (
    <ColumnWrapper paddingLeftRight={1}>
      <LogoGoodBoi />
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <MainButton primary text={'zaloguj się'} />
      </Link>
      <Link to="/register" style={{ textDecoration: 'none' }}>
        <MainButton secondary text={'zarejestruj'} />
      </Link>
      <MainButton ternary text={'portal good boi'} />
      <Footer />
    </ColumnWrapper>
  );
};

export default LandingPage;
