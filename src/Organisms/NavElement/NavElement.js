import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

import { BsChevronLeft } from 'react-icons/bs';
import GoHomeStyled from '../../Atoms/NavElementStyled/GoHomeStyled';
import GreyLabel from '../../Atoms/GreyLabel/GreyLabel';
import LinkWrapperStyled from '../../Atoms/NavElementStyled/LinkWrapperStyled';
import { NavElementStyled } from './NavElementStyled';
import PropTypes from 'prop-types';
import home from '../../Assets/home.png';
import pathData from '../../Consts/pathData';

const NavElement = () => {
  const navigate = useNavigate();
  const locationPath = useLocation();
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
    </>
  );
};

NavElement.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NavElement;
