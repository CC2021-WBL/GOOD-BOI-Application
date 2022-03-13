import { useContext, useState } from 'react';

import BurgerMenu from '../../Organisms/BurgerMenu/BurgerMenu';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import Footer from '../../Molecules/Footer/Footer';
import GridWrapper from '../../Templates/Layout/GridWrapper';
import ImgWrapperStyled from './ImgWrapperStyled';
import Logo2 from '../../Assets/Logo2.png';
import { MdMenu } from 'react-icons/md';
import { UserDataContext } from '../../Context/UserDataContext';

const LandingPage = () => {
  const { state } = useContext(UserDataContext);
  const { isAuthenticated } = state;
  const [open, setOpen] = useState(false);
  return (
    <>
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
      <GridWrapper
        mobile="3 / 1 / 4 / 2"
        tablet="2 / 2 / 4 / 3"
        desktop="3 / 3"
      >
        <ColumnWrapper paddingLeftRight={1} paddingBottom={1}>
          <ImgWrapperStyled>
            <img src={Logo2} alt="App logo" />
          </ImgWrapperStyled>
          {isAuthenticated ? (
            <FakeButton
              to="/in-progress"
              colors="ternary"
              text="portal good boi"
            />
          ) : (
            <>
              <FakeButton to="/login" colors="primary" text="Zaloguj się" />
              <FakeButton
                to="/register"
                colors="secondary"
                text="Zarejestruj"
              />
              <FakeButton
                to="/in-progress"
                colors="ternary"
                text="portal good boi"
              />
            </>
          )}

          <BurgerMenu open={open} setOpen={setOpen} />
        </ColumnWrapper>
      </GridWrapper>
      <Footer />
    </>
  );
};

export default LandingPage;
