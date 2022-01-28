import AppLogo from '../../Assets/AppLogo.png';
import { BsChevronLeft } from 'react-icons/bs';
import LinkWrapperStyled from '../../Atoms/NavElementStyled/LinkWrapperStyled';
import LogoStyled from '../../Atoms/NavElementStyled/LogoStyled';
import { NavElementStyled } from './NavElementStyled';
import NavLabel from './NavLabel';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

// import {
//   useNavigate,
//   // useLocation
// } from 'react-router-dom';

// import { useNavigate } from 'react-router-dom';

// import pathData from '../../Consts/pathData';

// import GreyLabel from '../../Atoms/GreyLabel/GreyLabel';

// import LogoStyled from '../../Atoms/NavElementStyled/LogoStyled';

const NavElement = () => {
  const navigate = useNavigate();
  // const { name } = useParams();
  // const locationPath = useLocation();

  // const foundPath = pathData.find((e) => e.path === locationPath.pathname);

  return (
    <div style={{ height: '60px' }}>
      <NavElementStyled>
        <LinkWrapperStyled onClick={() => navigate(-1)}>
          <BsChevronLeft className="arrowLeft" />

          <h3 className="back">wróć</h3>
        </LinkWrapperStyled>

        {/* {foundPath.path === locationPath.pathname && foundPath.label ? (
        <>
          <h1>{foundPath.text}</h1> <GreyLabel text={foundPath.label} />
        </>
      ) : (
        <h1>{foundPath.text}</h1>
      )} */}
        {NavLabel()}
        <LogoStyled>
          <img src={AppLogo} alt="Logo aplikacji" className="logo" />
        </LogoStyled>
      </NavElementStyled>
    </div>
  );
};

NavElement.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NavElement;
