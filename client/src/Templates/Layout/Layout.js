import Footer from '../../Molecules/Footer/Footer';
import FooterDesktop from '../../PagesBody/InProgressPage/FooterDesktop';
import GhostFooterStyled from '../../Molecules/Footer/GhostFooterStyled';
import NavDesktop from '../../PagesBody/InProgressPage/NavDesktop';
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
      {window.innerWidth < 700 ? <NavElement /> : ''}
      {window.innerWidth > 700 ? <NavDesktop /> : ''}
      {!withLabel && <div style={{ height: '60px' }} />}
      <Outlet />
      {window.innerWidth > 700 ? (
        <FooterDesktop />
      ) : Math.abs(initHeight - height.height) <= 150 ? (
        <GhostFooterStyled />
      ) : (
        ``
      )}
      {window.innerWidth > 700 ? (
        ''
      ) : withSettings ? (
        <Footer withSettings />
      ) : (
        <Footer />
      )}
    </>
  );
};

Layout.propTypes = {
  withLabel: propTypes.bool,
  withSettings: propTypes.bool,
};

export default Layout;
