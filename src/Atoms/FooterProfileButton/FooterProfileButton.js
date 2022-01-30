import propTypes from 'prop-types';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Div, FooterProfileButtonStyled } from './FooterProfileButtonStyled';

const FooterProfileButton = () => {
  const navigate = useNavigate();
  function clickHandler() {
    navigate('./profile');
  }
  return (
    <FooterProfileButtonStyled onClick={clickHandler}>
      <FaUserCircle />
      <Div> Twój profil </Div>
    </FooterProfileButtonStyled>
  );
};

FooterProfileButton.propTypes = {
  text: propTypes.string,
  active: propTypes.string,
};

export default FooterProfileButton;
