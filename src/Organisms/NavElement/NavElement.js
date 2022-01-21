import PropTypes from 'prop-types';
import { BsChevronLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import AppLogo from '../../Assets/AppLogo.png';
import LogoStyled from '../../Atoms/NavElementStyled/LogoStyled';
import LinkWrapperStyled from '../../Atoms/NavElementStyled/LinkWrapperStyled';

import { NavElementStyled } from './NavElementStyled';

const NavElement = ({ text }) => {
  const navigate = useNavigate();
  return (
    <NavElementStyled>
      <LinkWrapperStyled onClick={() => navigate(-1)}>
        <BsChevronLeft className="arrowLeft" />

        <h3 className="back">wróć</h3>
      </LinkWrapperStyled>

      <h1 className="navText">{text}</h1>
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
