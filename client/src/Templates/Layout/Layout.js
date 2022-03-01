import Footer from '../../Molecules/Footer/Footer';
import FooterDesktop from '../../PagesBody/InProgressPage/FooterDesktop';
import GhostFooterStyled from '../../Molecules/Footer/GhostFooterStyled';
import NavDesktop from '../../PagesBody/InProgressPage/NavDesktop';
import NavElement from '../../Organisms/NavElement/NavElement';
import { Outlet } from 'react-router-dom';
import propTypes from 'prop-types';
import useWindowHeight from '../../Tools/useWindowHeight';
import { useEffect, useState } from 'react';

const initHeight = window.innerHeight;
// 150 pixels of change in the window.height triggers the footer and ghost footer to hide
const Layout = ({ withLabel, withSettings }) => {
  const [moveFooter, setMoveFooter] = useState('');
  useEffect(() => {
    setMoveFooter(app.clientHeight < window.innerHeight);
    console.log('useEffect ' + moveFooter);
    console.log('window ' + window.document.body.offsetHeight);
  }, [moveFooter]);

  const height = useWindowHeight();
  const app = document.querySelector('#root');
  console.log(app.clientHeight);
  console.log(window.innerHeight);
  console.log(moveFooter);
  console.log(app.getBoundingClientRect().height);
  return (
    <>
      {window.innerWidth < 700 ? <NavElement /> : ''}
      {window.innerWidth > 700 ? <NavDesktop /> : ''}
      {!withLabel && window.innerWidth < 700 && (
        <div style={{ height: '60px' }} />
      )}
      <Outlet />
      {window.innerWidth > 700 ? (
        <FooterDesktop className={moveFooter ? 'fixed' : 'relative'} />
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
