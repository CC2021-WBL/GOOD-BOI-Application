/* eslint-disable no-unused-vars */

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

import AppLogo from '../../Assets/AppLogo.png';
import Backdrop from '../../Atoms/Modal/Backdrop';
import { BsChevronLeft } from 'react-icons/bs';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { ContestContext } from '../../Context/ContestContext';
import { DogContext } from '../../Context/DogContext';
import GoHomeStyled from '../../Atoms/NavElementStyled/GoHomeStyled';
import GreyLabel from '../../Atoms/GreyLabel/GreyLabel';
import LinkWrapperStyled from '../../Atoms/NavElementStyled/LinkWrapperStyled';
import { MdMenu } from 'react-icons/md';
import { NavElementStyled } from './NavElementStyled';
import PropTypes from 'prop-types';
import { UserDataContext } from '../../Context/UserDataContext';
import { checkPathOrigin } from '../../Tools/checkPathOrigin';
import home from '../../Assets/home.png';
import pathData from '../../Consts/pathData';

const NavElement = () => {
  const locationPath = useLocation();
  const foundPath = pathData.find((e) => e.path === locationPath.pathname);
  const login = locationPath.pathname === '/login';
  const register = locationPath.pathname === '/register';
  const contact = locationPath.pathname === '/contact-form';
  const forgot = locationPath.pathname === '/forgot';
  const inProgress = locationPath.pathname === '/in-progress';
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { state } = useContext(UserDataContext);
  const { dogState } = useContext(DogContext);
  const { contestState } = useContext(ContestContext);
  const namesFromContext = {
    userName: state.userName,
    userSurname: state.userSurname,
    dogName: dogState.chosenDog,
    contestName: contestState.contestName,
  };

  // const foundPath = pathData.find((e) => e.path === locationPath.pathname);
  const data = checkPathOrigin(locationPath.pathname, namesFromContext);
  console.log(data);
  return (
    <>
      <NavElementStyled>
        {login || register || contact || forgot || inProgress ? (
          <div className="burger-wrapper" />
        ) : (
          <div className="burger-wrapper">
            <MdMenu className="burger-icon" onClick={() => setOpen(true)} />
          </div>
        )}

        {/* TEST FUNKCJI GIGANT */}

        <h3 className="navText">{data.text}</h3>

        {/* {locationPath.state && (
           <h3 className="navText">{locationPath.state.text}</h3>
        )}

        {foundPath && foundPath.path === locationPath.pathname && (
          <>
            <h3 className="navText">{foundPath.text}</h3>
          </>
          )} */}

        <GoHomeStyled>
          <Link to="/">
            <img src={home} alt="Buda psa" className="logo" />
          </Link>
        </GoHomeStyled>
      </NavElementStyled>
      {/* {locationPath.state && (
        <>
          <div style={{ height: '60px' }} />
          <GreyLabel text={locationPath.state.label} />
        </>
      )} */}
      {data.label && data.label.length !== 0 && (
        <>
          <div style={{ height: '60px' }} />
          <GreyLabel text={data.label} />
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
