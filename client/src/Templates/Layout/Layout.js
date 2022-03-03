import { useEffect, useState } from 'react';

import Footer from '../../Molecules/Footer/Footer';
import FooterDesktop from '../../PagesBody/InProgressPage/FooterDesktop/FooterDesktop';
import GhostFooterStyled from '../../Molecules/Footer/GhostFooterStyled';
import NavDesktop from '../../PagesBody/InProgressPage/NavDesktop/NavDesktop';
import NavElement from '../../Organisms/NavElement/NavElement';
import { Outlet } from 'react-router-dom';
import Sidebar from './../../PagesBody/InProgressPage/Sidebar/Sidebar';
import propTypes from 'prop-types';
import useWindowHeight from '../../Tools/useWindowHeight';

const initHeight = window.innerHeight;
// 150 pixels of change in the window.height triggers the footer and ghost footer to hide
const Layout = ({ withLabel, withSettings }) => {
  const [moveFooter, setMoveFooter] = useState('');
  useEffect(() => {
    setMoveFooter(app.clientHeight < window.innerHeight);
  }, [moveFooter]);

  const height = useWindowHeight();
  const app = document.querySelector('#root');
  return (
    <>
      <Sidebar />
      {/* {window.innerWidth <= 800 ? <NavElement /> : ''} */}
      <NavElement />
      {window.innerWidth >= 800 ? <NavDesktop /> : ''}
      {!withLabel && window.innerWidth <= 800 && (
        <div style={{ height: '60px' }} />
      )}
      <Outlet />
      {window.innerWidth >= 800 ? (
        <FooterDesktop className={moveFooter ? 'fixed' : 'relative'} />
      ) : Math.abs(initHeight - height.height) <= 150 ? (
        <GhostFooterStyled />
      ) : (
        ``
      )}
      {window.innerWidth >= 800 ? (
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
