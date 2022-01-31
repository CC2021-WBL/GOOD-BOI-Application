import propTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

import Footer from '../../Molecules/Footer/Footer';
import GhostFooterStyled from '../../Molecules/Footer/GhostFooterStyled';
// import GreyLabel from '../../Atoms/GreyLabel/GreyLabel';
import NavElement from '../../Organisms/NavElement/NavElement';

const Layout = ({ withSettings }) => {
  return (
    <>
      <NavElement text="Wanna be.." />
      {/* <div style={{ height: '20px' }}></div> */}
      {/* {withLabel && <GreyLabel text="nie wiem" />} */}
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
