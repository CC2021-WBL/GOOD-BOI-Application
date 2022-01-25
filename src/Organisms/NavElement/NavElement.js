import PropTypes from 'prop-types';
import { BsChevronLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import AppLogo from '../../Assets/AppLogo.png';
import LinkWrapperStyled from '../../Atoms/NavElementStyled/LinkWrapperStyled';
import LogoStyled from '../../Atoms/NavElementStyled/LogoStyled';
import { NavElementStyled } from './NavElementStyled';

const NavElement = ({ text }) => {
  const navigate = useNavigate();
  return (
    <div style={{ height: '60px' }}>
      <NavElementStyled>
        <LinkWrapperStyled onClick={() => navigate(-1)}>
          <BsChevronLeft className="arrowLeft" />

          <h3 className="back">wróć</h3>
        </LinkWrapperStyled>

        <h1 className="navText">{text}</h1>
        <LogoStyled>
          <Link to="/">
            <img src={AppLogo} alt="Logo aplikacji" className="logo" />
          </Link>
        </LogoStyled>
      </NavElementStyled>
    </div>
  );
};

NavElement.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NavElement;
