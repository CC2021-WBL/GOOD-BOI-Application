import propTypes from 'prop-types';
import { FaUserCircle } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { Div, FooterProfileButtonStyled } from './FooterProfileButtonStyled';

const FooterProfileButton = ({ withSettings }) => {
  const navigate = useNavigate();
  function clickHandler() {
    {
      withSettings ? navigate('./settings') : navigate('./user');
    }
  }
  return (
    <FooterProfileButtonStyled onClick={clickHandler}>
      {withSettings ? (
        <>
          <MdSettings />
          <Div> Ustawienia </Div>
        </>
      ) : (
        <>
          <FaUserCircle />
          <Div> Twój profil </Div>
        </>
      )}
    </FooterProfileButtonStyled>
  );
};

FooterProfileButton.propTypes = {
  withSettings: propTypes.bool,
};

export default FooterProfileButton;
