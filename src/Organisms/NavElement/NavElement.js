import PropTypes from 'prop-types';
import { BsChevronLeft } from 'react-icons/bs';
import { useNavigate, useLocation } from 'react-router-dom';

import AppLogo from '../../Assets/AppLogo.png';
import LogoStyled from '../../Atoms/NavElementStyled/LogoStyled';
import LinkWrapperStyled from '../../Atoms/NavElementStyled/LinkWrapperStyled';

import { NavElementStyled } from './NavElementStyled';

const NavElement = () => {
  const navigate = useNavigate();
  // const { name } = useParams();
  const path = useLocation();
  return (
    <NavElementStyled>
      <LinkWrapperStyled onClick={() => navigate(-1)}>
        <BsChevronLeft className="arrowLeft" />

        <h3 className="back">wróć</h3>
      </LinkWrapperStyled>
      {/* {name === 'aaa' ? (
        <h1 className="navText">{path}</h1>
      ) : (
        <h1 className="navText">222</h1>
      )} */}
      {/* // <h1 className="navText">{name}</h1> */}
      {/* <h1>{if(path.pathname==="/login"){<h1>Login page aaaa</h1>}}</h1> */}

      {path.pathname === '/login' ? <h1>Login page aaaa</h1> : <h1>dupa</h1>}
      <LogoStyled>
        <img src={AppLogo} alt="Logo aplikacji" className="logo" />
      </LogoStyled>
    </NavElementStyled>
  );
};

NavElement.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NavElement;
