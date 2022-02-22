import Footer from '../../Molecules/Footer/Footer';
import GhostFooterStyled from '../../Molecules/Footer/GhostFooterStyled';
import NavElement from '../../Organisms/NavElement/NavElement';
import { Outlet } from 'react-router-dom';
import propTypes from 'prop-types';
import useWindowHeight from '../../Tools/useWindowHeight';

const initHeight = window.innerHeight;
// 150 pixels of change in the window.height triggers the footer and ghost footer to hide
const Layout = ({ withLabel, withSettings }) => {
  const height = useWindowHeight();
  return (
    <>
      <NavElement />
      {!withLabel && <div style={{ height: '60px' }} />}
      <Outlet />
      {Math.abs(initHeight - height.height) <= 150 ? <GhostFooterStyled /> : ``}
      {withSettings ? <Footer withSettings /> : <Footer />}
    </>
  );
};

Layout.propTypes = {
  withLabel: propTypes.bool,
  withSettings: propTypes.bool,
};

export default Layout;
