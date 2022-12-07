import { MdMenu } from 'react-icons/md';
import { useContext, useState } from 'react';

import BackgroundDivStyled from '../../Atoms/BackgroundLanding/BackgroundDivStyled';
import BurgerMenu from '../../Organisms/BurgerMenu/BurgerMenu';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import DesktopLandingPage from './DesktopLandingPage';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import Footer from '../../Molecules/Footer/Footer';
import GridWrapper from '../../Templates/Layout/GridWrapper';
import ImgWrapperStyled from './ImgWrapperStyled';
import Logo2 from '../../Assets/Logo2.png';
import NavElement from '../../Organisms/NavElement/NavElement';
import useMediaQuery from '../../Hooks/useMediaQuery';
import { UserDataContext } from '../../Context/UserDataContext';

const LandingPage = () => {
  const mobileOnly = useMediaQuery('(max-width:799px)');
  const { state } = useContext(UserDataContext);
  const { isAuthenticated, userId } = state;
  const [open, setOpen] = useState(false);

  return (
    <>
      {isAuthenticated && mobileOnly ? (
        <div className="burger-wrapper">
          <MdMenu
            className="burger-icon"
            onClick={() => setOpen(true)}
            style={{
              fontSize: '1.25rem',
              color: 'lightgrey',
              display: 'flex',
              margin: '1.125rem',
              cursor: 'pointer',
              position: 'absolute',
              top: 0,
              zIndex: 10,
            }}
          />
        </div>
      ) : null}
      <BackgroundDivStyled className="landing-background" />
      <NavElement />
      {useMediaQuery('(max-width:799px)') && (
        <GridWrapper
          mobile="3 / 1 / 4 / 2"
          tablet="2 / 2 / 4 / 3"
          desktop="3 / 3"
          className="landing-grid-wrapper"
        >
          <ColumnWrapper paddingLeftRight={1} paddingBottom={1}>
            <ImgWrapperStyled>
              <img src={Logo2} alt="App logo" />
            </ImgWrapperStyled>
            {isAuthenticated ? (
              <FakeButton
                to={`/user/${userId}`}
                colors="ternary"
                text="Twój profil"
              />
            ) : (
              <>
                <FakeButton to="/login" colors="primary" text="Zaloguj się" />
                <FakeButton
                  to="/register"
                  colors="secondary"
                  text="Zarejestruj"
                />
              </>
            )}
          </ColumnWrapper>
        </GridWrapper>
      )}
      {useMediaQuery('(min-width:800px)') && <DesktopLandingPage />}
      <BurgerMenu open={open} setOpen={setOpen} />
      <Footer />
    </>
  );
};

export default LandingPage;
