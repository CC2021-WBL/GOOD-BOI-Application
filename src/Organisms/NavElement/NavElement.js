import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import { useContext, useState } from 'react';

import Backdrop from '../../Atoms/Modal/Backdrop';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import GoHomeStyled from '../../Atoms/NavElementStyled/GoHomeStyled';
import GreyLabel from '../../Atoms/GreyLabel/GreyLabel';
import home from '../../Assets/home.png';
import pathData from '../../Consts/pathData';
import { NavElementStyled } from './NavElementStyled';
import { UserDataContext } from '../../Context/UserDataContext';

const NavElement = () => {
  const { state } = useContext(UserDataContext);
  const { userId } = state;
  const locationPath = useLocation();
  const foundPath = pathData.find((e) => e.path === locationPath.pathname);

  const [open, setOpen] = useState(false);

  return (
    <>
      <NavElementStyled>
        <div className="burger-wrapper">
          <MdMenu className="burger-icon" onClick={() => setOpen(true)} />
        </div>
        {locationPath.state && (
          <h3 className="navText">{locationPath.state.text}</h3>
        )}

        {foundPath && foundPath.path === locationPath.pathname && (
          <>
            <h3 className="navText">{foundPath.text}</h3>
          </>
        )}
        <GoHomeStyled>
          <Link to={`/user/${userId}`}>
            <img src={home} alt="Buda psa" className="logo" />
          </Link>
        </GoHomeStyled>
      </NavElementStyled>
      {locationPath.state && (
        <>
          <div style={{ height: '60px' }} />
          <GreyLabel text={locationPath.state.label} />
        </>
      )}
      {foundPath && foundPath.label.length !== 0 && (
        <>
          <div style={{ height: '60px' }} />
          <GreyLabel text={foundPath.label} />
        </>
      )}
      <BurgerMenu open={open} setOpen={setOpen} />
      {open && <Backdrop />}
    </>
  );
};

NavElement.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NavElement;
