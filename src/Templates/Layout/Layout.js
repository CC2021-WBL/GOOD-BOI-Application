import { Outlet } from 'react-router-dom';

import Footer from '../../Molecules/Footer/Footer';
import NavElement from '../../Organisms/NavElement/NavElement';
import GhostFooterStyled from '../../Molecules/Footer/GhostFooterStyled';

const Layout = () => {
  return (
    <>
      <NavElement text="WannaBe..." />
      <Outlet />
      <GhostFooterStyled />
      <Footer />
    </>
  );
};

export default Layout;
