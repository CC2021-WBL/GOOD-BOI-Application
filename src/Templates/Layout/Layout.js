import { Outlet } from 'react-router-dom';

import Footer from '../../Molecules/Footer/Footer';
import GhostFooterStyled from '../../Molecules/Footer/GhostFooterStyled';
import GreyLabel from '../../Atoms/GreyLabel/GreyLabel';
import NavElement from '../../Organisms/NavElement/NavElement';

const Layout = (withLabel) => {
  return (
    <>
      <NavElement text="WannaBe..." />
      {withLabel && <GreyLabel text="Make me Dynamic Please!" />}
      <Outlet />
      <GhostFooterStyled />
      <Footer />
    </>
  );
};

export default Layout;
