import Footer from '../../Molecules/Footer/Footer';
import GhostFooterStyled from '../../Molecules/Footer/GhostFooterStyled';
import NavElement from '../../Organisms/NavElement/NavElement';
import { Outlet } from 'react-router-dom';
import propTypes from 'prop-types';

const Layout = ({ withLabel, withSettings }) => {
  return (
    <>
      <NavElement text="WannaBe..." />
      {!withLabel && <div style={{ height: '60px' }} />}

      <Outlet />
      <GhostFooterStyled />
      {withSettings ? <Footer withSettings /> : <Footer />}
    </>
  );
};

Layout.propTypes = {
  withLabel: propTypes.bool,
  withSettings: propTypes.bool,
};

export default Layout;
