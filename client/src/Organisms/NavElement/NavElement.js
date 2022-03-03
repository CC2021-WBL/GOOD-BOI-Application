import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import { useContext, useState } from 'react';

import Backdrop from '../../Atoms/Modal/Backdrop';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import GoHomeStyled from '../../Atoms/NavElementStyled/GoHomeStyled';
import GreyLabel from '../../Atoms/GreyLabel/GreyLabel';
import GridWrapper from '../../Styles/GridWrapper';
import home from '../../Assets/home.png';
import { ContestContext } from '../../Context/ContestContext';
import { DogContext } from '../../Context/DogContext';
import { NavElementStyled } from './NavElementStyled';
import { UserDataContext } from '../../Context/UserDataContext';
import { checkPathOrigin } from '../../Tools/checkPathOrigin';

const NavElement = () => {
  const locationPath = useLocation();
  const login = locationPath.pathname === '/login';
  const register = locationPath.pathname === '/register';
  const contact = locationPath.pathname === '/contact-form';
  const forgot = locationPath.pathname === '/forgot';
  const inProgress = locationPath.pathname === '/in-progress';
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
      <GridWrapper>
        <NavElementStyled style={{gridRow: 1}}>
          {/* TODO: add responsive breakpoint and hide on tablet + */}
          {login || register || contact || forgot || inProgress ? (
            <div className="burger-wrapper mobile_only" />
          ) : (
            <div className="burger-wrapper mobile_only">
              <MdMenu className="burger-icon" onClick={() => setOpen(true)} />
            </div>
          )}
  {/* TODO: align to left on tablet + */}
          <h3 className="navText">{data.text}</h3>

          <GoHomeStyled>
            <Link to="/">
              <img src={home} alt="Buda psa" className="logo" />
            </Link>
          </GoHomeStyled>
        </NavElementStyled>
      {data.label && data.label.length !== 0 && (
          <GreyLabel text={data.label} style={{gridColumn: 2,gridRow: 1}}/>
      )}
      </GridWrapper>
      <BurgerMenu open={open} setOpen={setOpen} />
      {open && <Backdrop />}
    </>
  );
};

NavElement.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NavElement;
