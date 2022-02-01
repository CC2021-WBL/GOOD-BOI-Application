import PropTypes from 'prop-types';
import { BsChevronLeft } from 'react-icons/bs';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

// import pathData from '../../Consts/pathData';
import AppLogo from '../../Assets/AppLogo.png';
import GreyLabel from '../../Atoms/GreyLabel/GreyLabel';
import LinkWrapperStyled from '../../Atoms/NavElementStyled/LinkWrapperStyled';
import LogoStyled from '../../Atoms/NavElementStyled/LogoStyled';
import pathData from '../../Consts/pathData';
// import NavLabel from './NavLabel';
import { NavElementStyled } from './NavElementStyled';

const NavElement = () => {
  const navigate = useNavigate();
  const locationPath = useLocation();
  console.log(locationPath.state);
  const id = useParams();
  const contestId = id.contestId;
  console.log(`tu powinien być id contestu ${contestId}`);

  const foundPath = pathData.find((e) => e.path === locationPath.pathname);

  // console.log(foundPath);
  // console.log(foundPath.label);

  return (
    <>
      <NavElementStyled>
        <LinkWrapperStyled onClick={() => navigate(-1)}>
          <BsChevronLeft className="arrowLeft" />

          <h3 className="back">wróć</h3>
        </LinkWrapperStyled>

        {locationPath.state && <h1>{locationPath.state.text}</h1>}

        {foundPath && foundPath.path === locationPath.pathname && (
          <>
            <h1>{foundPath.text}</h1>
          </>
        )}

        <LogoStyled>
          <img src={AppLogo} alt="Logo aplikacji" className="logo" />
        </LogoStyled>
      </NavElementStyled>
      {locationPath.state && (
        <>
          <div style={{ height: '60px' }}></div>
          <GreyLabel text={locationPath.state.label} />
        </>
      )}
      {foundPath && foundPath.label.length !== 0 && (
        <>
          <div style={{ height: '60px' }}></div>
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
