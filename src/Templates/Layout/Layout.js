import propTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

import Footer from '../../Molecules/Footer/Footer';
import GhostFooterStyled from '../../Molecules/Footer/GhostFooterStyled';
import GreyLabel from '../../Atoms/GreyLabel/GreyLabel';
import NavElement from '../../Organisms/NavElement/NavElement';

const Layout = ({ withLabel, withSettings }) => {
  return (
    <>
      <NavElement text="WannaBe..." />
      {withLabel && <GreyLabel text="Make me Dynamic Please!" />}
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
