import propTypes from 'prop-types';
import { FaUserCircle } from 'react-icons/fa';
import { Div, FooterProfileButtonStyled } from './FooterProfileButtonStyled';

function clickHandler() {}
const FooterProfileButton = () => {
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
