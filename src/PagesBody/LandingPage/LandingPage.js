import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import Footer from '../../Molecules/Footer/Footer';
import ImgWrapperStyled from './ImgWrapperStyled';
import Logo2 from '../../Assets/Logo2.png';
import { UserDataContext } from '../../Context/UserDataContext';
import { useContext } from 'react';

const LandingPage = () => {
  const { state } = useContext(UserDataContext);
  const { isAuthenticated } = state;
  return (
    <ColumnWrapper paddingLeftRight={1}>
      <ImgWrapperStyled>
        <img src={Logo2} alt="App logo" />
      </ImgWrapperStyled>
      {isAuthenticated ? (
        <FakeButton to="/in-progress" colors="ternary" text="portal good boi" />
      ) : (
        <>
          <FakeButton to="/login" colors="primary" text="Zaloguj się" />
          <FakeButton to="/register" colors="secondary" text="Zarejestruj" />
          <FakeButton
            to="/in-progress"
            colors="ternary"
            text="portal good boi"
          />
        </>
      )}
      <Footer />
    </ColumnWrapper>
  );
};

export default LandingPage;
