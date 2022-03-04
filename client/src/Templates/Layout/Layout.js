import Footer from '../../Molecules/Footer/Footer';
import GridWrapper from './../../Styles/GridWrapper';
import NavDesktop from '../../Organisms/DesktopNavbar/NavDesktop';
import NavElement from '../../Organisms/NavElement/NavElement';
import { Outlet } from 'react-router-dom';
import propTypes from 'prop-types';

// import useWindowHeight from '../../Tools/useWindowHeight';

// const initHeight = window.innerHeight;
// 150 pixels of change in the window.height triggers the footer and ghost footer to hide
const Layout = ({ withSettings }) => {
  // const height = useWindowHeight();
  return (
    <>
      <GridWrapper desktop="1/1/2/6" tablet="1/1/2/6">
        <NavDesktop />
      </GridWrapper>
      <NavElement mobile_only />
      <Outlet />
      {/* {Math.abs(initHeight - height.height) <= 150 ? <GhostFooterStyled /> : ``} */}
      {withSettings ? <Footer withSettings /> : <Footer />}
    </>
  );
};

Layout.propTypes = {
  withLabel: propTypes.bool,
  withSettings: propTypes.bool,
};

export default Layout;
