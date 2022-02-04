import { Link, useLocation, useParams } from 'react-router-dom';

import BurgerMenu from '../BurgerMenu/BurgerMenu';
import GoHomeStyled from '../../Atoms/NavElementStyled/GoHomeStyled';
import GreyLabel from '../../Atoms/GreyLabel/GreyLabel';
import { MdMenu } from 'react-icons/md';
import { NavElementStyled } from './NavElementStyled';
import PropTypes from 'prop-types';
import home from '../../Assets/home.png';
import pathData from '../../Consts/pathData';
import { useState } from 'react';

const NavElement = () => {
  const locationPath = useLocation();
  const id = useParams();
  const contestId = id.contestId;
  console.log(`tu powinien być id contestu ${contestId}`);
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
          <Link to="/">
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
    </>
  );
};

NavElement.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NavElement;
