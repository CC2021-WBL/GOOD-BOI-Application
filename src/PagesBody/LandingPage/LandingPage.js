import { useContext } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import Footer from '../../Molecules/Footer/Footer';
import ImgWrapperStyled from './ImgWrapperStyled';
import Logo2 from '../../Assets/Logo2.png';
import { UserDataContext } from '../../Context/UserDataContext';

const LandingPage = () => {
  const { state } = useContext(UserDataContext);
  const { isAuthenticated } = state;
  return (
    <ColumnWrapper paddingLeftRight={1}>
      <ImgWrapperStyled>
        <img src={Logo2} alt="App logo" />
      </ImgWrapperStyled>
      {isAuthenticated ? (
        <FakeButton
          to="/in-progress"
          ternary="ternary"
          text="portal good boi"
        />
      ) : (
        <>
          <FakeButton to="/login" primary="primary" text="Zaloguj się" />
          <FakeButton to="/register" secondary="secondary" text="Zarejestruj" />
          <FakeButton
            to="/in-progress"
            ternary="ternary"
            text="portal good boi"
          />
        </>
      )}
      <Footer />
    </ColumnWrapper>
  );
};

export default LandingPage;
