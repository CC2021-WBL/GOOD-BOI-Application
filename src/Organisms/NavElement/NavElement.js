import PropTypes from 'prop-types';
import { BsChevronLeft } from 'react-icons/bs';
import { LinkWrapper, NavElementContainer, Logo } from './NavElementStyled';
import GoodBoiLogo from '../../assets/GoodBoiLogo.png';
import { useNavigate } from 'react-router-dom';

const NavElement = (props) => {
  const { text } = props;

  const navigate = useNavigate();
  return (
    <NavElementContainer>
      <LinkWrapper onClick={() => navigate(-1)}>
        <BsChevronLeft className="arrowLeft" />

        <h3 className="back">wróć</h3>
      </LinkWrapper>

      <h1 className="navText">{text}</h1>
      <Logo>
        <img src={GoodBoiLogo} alt="Logo aplikacji" className="logo" />
      </Logo>
    </NavElementContainer>
  );
};

NavElement.propTypes = {
  text: PropTypes.string,
};

export default NavElement;
