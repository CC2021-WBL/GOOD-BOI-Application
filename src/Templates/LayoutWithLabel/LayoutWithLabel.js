import { Outlet } from 'react-router-dom';

import Footer from '../../Molecules/Footer/Footer';
import GreyLabel from '../../Atoms/GreyLabel/GreyLabel';
import NavElement from '../../Organisms/NavElement/NavElement';

const LayoutWithLabel = () => {
  return (
    <>
      <NavElement text="WannaBe" />
      <GreyLabel text="Make me Dynamic Please!" />
      <Outlet />
      <div style={{ height: '87px' }}></div>
      <Footer />
    </>
  );
};

export default LayoutWithLabel;
