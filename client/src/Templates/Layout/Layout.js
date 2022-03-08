import propTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

import Footer from '../../Molecules/Footer/Footer';
import NavElement from '../../Organisms/NavElement/NavElement';

// import useWindowHeight from '../../Tools/useWindowHeight';

// const initHeight = window.innerHeight;
// 150 pixels of change in the window.height triggers the footer and ghost footer to hide
const Layout = ({ withSettings }) => {
  // const height = useWindowHeight();
  return (
    <>
      <NavElement />
      <Outlet />
      {withSettings ? <Footer withSettings /> : <Footer />}
    </>
  );
};

Layout.propTypes = {
  withLabel: propTypes.bool,
  withSettings: propTypes.bool,
};

export default Layout;
