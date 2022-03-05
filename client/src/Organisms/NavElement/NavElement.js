import { Link, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';

import Backdrop from '../../Atoms/Modal/Backdrop';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { ContestContext } from '../../Context/ContestContext';
import { DogContext } from '../../Context/DogContext';
import GoHomeStyled from '../../Atoms/NavElementStyled/GoHomeStyled';
import GreyLabel from '../../Atoms/GreyLabel/GreyLabel';
import GridWrapper from '../../Styles/GridWrapper';
import { MdMenu } from 'react-icons/md';
import NavDesktop from './../DesktopNavbar/NavDesktop';
import { NavElementStyled } from './NavElementStyled';
import PropTypes from 'prop-types';
import { UserDataContext } from '../../Context/UserDataContext';
import { checkPathOrigin } from '../../Tools/checkPathOrigin';
import home from '../../Assets/home.png';

const NavElement = () => {
  const locationPath = useLocation();
  const login = locationPath.pathname === '/login';
  const register = locationPath.pathname === '/register';
  const contact = locationPath.pathname === '/contact-form';
  const forgot = locationPath.pathname === '/forgot';
  const inProgress = locationPath.pathname === '/in-progress';
  const landing = locationPath.pathname === '/';
  const [open, setOpen] = useState(false);
  const { state } = useContext(UserDataContext);
  const { dogState } = useContext(DogContext);
  const { contestState } = useContext(ContestContext);
  const namesFromContext = {
    userName: state.userName || '',
    userSurname: state.userSurname || '',
    dogName: dogState.chosenDog.dogName || '',
    contestName: contestState.contestName || '',
  };
  const data = checkPathOrigin(locationPath.pathname, namesFromContext);
  return (
    <>
      <GridWrapper className="mobile_only" mobile="1 / 1 / 2 / 2" navFoot>
        <NavElementStyled className="mobile_only">
          {login || register || contact || forgot || inProgress || landing ? (
            <div className="burger-wrapper" />
          ) : (
            <div className="burger-wrapper">
              <MdMenu className="burger-icon" onClick={() => setOpen(true)} />
            </div>
          )}

          <h3 className="navText">{data.text}</h3>

          <GoHomeStyled>
            <Link to="/">
              <img src={home} alt="Buda psa" className="logo" />
            </Link>
          </GoHomeStyled>
        </NavElementStyled>
      </GridWrapper>
      <GridWrapper desktop="1/1/2/6" tablet="1/1/2/6">
        <NavDesktop />
      </GridWrapper>
      {data.label && data.label.length !== 0 && (
        <GridWrapper
          mobile="2 / 1 / 3 / 2"
          tablet="2 / 2 / 3 / -1"
          desktop="2 / 1 / 3 / -1"
        >
          <>
            <GreyLabel text={data.label} />
          </>
        </GridWrapper>
      )}
      <BurgerMenu open={open} setOpen={setOpen} />
      {open && <Backdrop />}
    </>
  );
};

export default NavElement;
