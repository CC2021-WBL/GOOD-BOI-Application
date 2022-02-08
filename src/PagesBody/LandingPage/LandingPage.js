import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import Footer from '../../Molecules/Footer/Footer';
import LogoGoodBoi from '../../Atoms/LogoGoodBoi/LogoGoodBoi';

const LandingPage = () => {
  return (
    <ColumnWrapper paddingLeftRight={1}>
      <LogoGoodBoi />
      <FakeButton to="/login" primary="primary" text="Zaloguj się" />

      <FakeButton to="/register" secondary="secondary" text="Zarejestruj" />

      <FakeButton to="/in-progress" ternary="ternary" text="portal good boi" />

      <Footer />
    </ColumnWrapper>
  );
};

export default LandingPage;
