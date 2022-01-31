import PropTypes from 'prop-types';
import { BsChevronLeft } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';

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
  // const { name } = useParams();
  const locationPath = useLocation();
  console.log(location);

  const foundPath = pathData.find((e) => e.path === locationPath.pathname);
  console.log(foundPath);
  console.log(foundPath.label);

  return (
    <>
      <NavElementStyled>
        <LinkWrapperStyled onClick={() => navigate(-1)}>
          <BsChevronLeft className="arrowLeft" />

          <h3 className="back">wróć</h3>
        </LinkWrapperStyled>

        {foundPath.path === locationPath.pathname && (
          <>
            <h1>{foundPath.text}</h1>
          </>
        )}

        <LogoStyled>
          <img src={AppLogo} alt="Logo aplikacji" className="logo" />
        </LogoStyled>
      </NavElementStyled>

      {foundPath.label && (
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
