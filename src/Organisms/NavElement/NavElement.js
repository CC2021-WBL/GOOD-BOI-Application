import PropTypes from 'prop-types';
import { BsChevronLeft } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import AppLogo from '../../Assets/AppLogo.png';
import GreyLabel from '../../Atoms/GreyLabel/GreyLabel';
import LinkWrapperStyled from '../../Atoms/NavElementStyled/LinkWrapperStyled';
import LogoStyled from '../../Atoms/NavElementStyled/LogoStyled';
// import pathData from '../../Consts/pathData';
import { NavElementStyled } from './NavElementStyled';
import { checkPathOrigin } from '../../Tools/checkPathOrigin';

const NavElement = () => {
  const navigate = useNavigate();
  const locationPath = useLocation();
  // const foundPath = pathData.find((e) => e.path === locationPath.pathname);
  const data = checkPathOrigin(locationPath.pathname);
  console.log(data);
  return (
    <>
      <NavElementStyled>
        <LinkWrapperStyled onClick={() => navigate(-1)}>
          <BsChevronLeft className="arrowLeft" />

          <h3 className="back">wróć</h3>
        </LinkWrapperStyled>

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
        <LogoStyled>
          <Link to="/">
            <img src={AppLogo} alt="Logo aplikacji" className="logo" />
          </Link>
        </LogoStyled>
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
    </>
  );
};

NavElement.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NavElement;
