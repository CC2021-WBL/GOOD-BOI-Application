import { useContext, useState } from 'react';

import BurgerMenu from '../../Organisms/BurgerMenu/BurgerMenu';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import Footer from '../../Molecules/Footer/Footer';
import ImgWrapperStyled from './ImgWrapperStyled';
import Logo2 from '../../Assets/Logo2.png';
import { MdMenu } from 'react-icons/md';
import Rocket from '../../Atoms/Rocket/Rocket';
import { UserDataContext } from '../../Context/UserDataContext';

const LandingPage = () => {
  const { state } = useContext(UserDataContext);
  const { isAuthenticated } = state;
  const [open, setOpen] = useState(false);
  return (
    <ColumnWrapper paddingLeftRight={1}>
      {isAuthenticated ? (
        <div className="burger-wrapper">
          <MdMenu
            className="burger-icon"
            onClick={() => setOpen(true)}
            style={{
              fontSize: '24px',
              color: 'grey',
              display: 'flex',
              marginTop: '10px',
              cursor: 'pointer',
            }}
          />
        </div>
      ) : null}
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
          <Rocket></Rocket>
        </>
      )}

      <BurgerMenu open={open} setOpen={setOpen} />
      <Footer />
    </ColumnWrapper>
  );
};

export default LandingPage;
