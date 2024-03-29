import { Link, useLocation } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import { useContext, useState } from 'react';

import Backdrop from '../../Atoms/Modal/Backdrop';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import GoHomeStyled from '../../Atoms/NavElementStyled/GoHomeStyled';
import GreyLabel from '../../Atoms/GreyLabel/GreyLabel';
import GridWrapper from '../../Templates/Layout/GridWrapper';
import Nav from '../Nav/Nav';
import Sidebar from './../Sidebar/Sidebar';
import checkLocationForNavRender from '../../Tools/checkLocationForNavRender';
import home from '../../Assets/home.png';
import { ContestContext } from '../../Context/ContestContext';
import { DogContext } from '../../Context/DogContext';
import { NavElementStyled } from './NavElementStyled';
import { UserDataContext } from '../../Context/UserDataContext';
import { checkPathOrigin } from '../../Tools/checkPathOrigin';

const NavElement = () => {
  const locationPath = useLocation();

  const [open, setOpen] = useState(false);
  const { state } = useContext(UserDataContext);
  const { chosenDog } = useContext(DogContext);
  const { contestState } = useContext(ContestContext);
  const namesFromContext = {
    userName: state.userName || '',
    userSurname: state.userSurname || '',
    dogName: chosenDog.dogName || '',
    contestName: contestState.contestName || '',
  };

  const data = checkPathOrigin(locationPath.pathname, namesFromContext);
  return (
    <>
      <GridWrapper mobile="1 / 1 / 2 / -1" className="mobile_only">
        <NavElementStyled className="mobile_only">
          {checkLocationForNavRender(locationPath.pathname) ? (
            <div className="burger-wrapper" />
          ) : (
            <div className="burger-wrapper">
              <MdMenu className="burger-icon " onClick={() => setOpen(true)} />
            </div>
          )}
          <h3 className="navText">{data.text}</h3>
          <GoHomeStyled>
            <Link to="/">
              <img src={home} alt="Buda psa" className="logo" />
            </Link>
          </GoHomeStyled>
        </NavElementStyled>
        {open && <Backdrop />}
      </GridWrapper>
      <GridWrapper desktop="1 / 1 / 2 / -1" tablet="1 / 1 / 2 / -1">
        <Nav />
      </GridWrapper>
      {data.label && data.label.length !== 0 && (
        <GridWrapper
          mobile="2 / 1 / 3 / 2"
          tablet="2 / 1 / 3 / -1"
          desktop="2 / 1 / 3 / -1"
        >
          <GreyLabel text={data.label} />
        </GridWrapper>
      )}
      <BurgerMenu open={open} setOpen={setOpen} />
      <Sidebar />
    </>
  );
};

export default NavElement;
