import propTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

import Footer from '../../Molecules/Footer/Footer';
import NavElement from '../../Organisms/NavElement/NavElement';

const Layout = ({ withSettings }) => {
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
