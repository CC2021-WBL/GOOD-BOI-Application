import propTypes from 'prop-types';
import { MdSettings } from 'react-icons/md';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Div, FooterProfileButtonStyled } from './FooterProfileButtonStyled';
import { UserDataContext } from '../../Context/UserDataContext';

const FooterProfileButton = ({ withSettings }) => {
  const { state } = useContext(UserDataContext);
  const { userId } = state;
  const navigate = useNavigate();
  function clickHandler() {
    {
      withSettings ? navigate('./settings') : navigate(`./user/${userId}`);
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
          <div className="bg-box"></div>
        </>
      )}
    </FooterProfileButtonStyled>
  );
};

FooterProfileButton.propTypes = {
  withSettings: propTypes.bool,
};

export default FooterProfileButton;
