import { Outlet } from 'react-router-dom';
import GreyLabel from '../../Atoms/GreyLabel/GreyLabel';
import Footer from '../../Molecules/Footer/Footer';
import NavElement from '../../Organisms/NavElement/NavElement';

const Layout = () => {
  return (
    <>
      <NavElement text="test2" />
      <GreyLabel text="Fixme" />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
