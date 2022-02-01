import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

import AppLogo from '../../Assets/AppLogo.png';
import { BsChevronLeft } from 'react-icons/bs';
import GreyLabel from '../../Atoms/GreyLabel/GreyLabel';
import LinkWrapperStyled from '../../Atoms/NavElementStyled/LinkWrapperStyled';
import LogoStyled from '../../Atoms/NavElementStyled/LogoStyled';
import { NavElementStyled } from './NavElementStyled';
import PropTypes from 'prop-types';
import pathData from '../../Consts/pathData';

const NavElement = () => {
  const navigate = useNavigate();
  // const { name } = useParams();
  const locationPath = useLocation();
  console.log(locationPath.state);
  const id = useParams();
  const contestId = id.contestId;
  console.log(`tu powinien być id contestu ${contestId}`);
  const foundPath = pathData.find((e) => e.path === locationPath.pathname);

  return (
    <>
      <NavElementStyled>
        <LinkWrapperStyled onClick={() => navigate(-1)}>
          <BsChevronLeft className="arrowLeft" />

          <h3 className="back">wróć</h3>
        </LinkWrapperStyled>

        {locationPath.state && (
          <h3 className="navText">{locationPath.state.text}</h3>
        )}

        {foundPath && foundPath.path === locationPath.pathname && (
          <>
            <h3 className="navText">{foundPath.text}</h3>
          </>
        )}
        <LogoStyled>
          <Link to="/">
            <img src={AppLogo} alt="Logo aplikacji" className="logo" />
          </Link>
        </LogoStyled>
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
    </>
  );
};

NavElement.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NavElement;
