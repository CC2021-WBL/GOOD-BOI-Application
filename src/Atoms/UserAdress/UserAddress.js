import propTypes from 'prop-types';
import { useState } from 'react';

import PARTICIPANTS from '../../Data/Dummy-data/test-data-participants';
import RegistrationFormSignup from '../../Organisms/RegistrationForm/RegistrationFormSignup';
import UserAddressStyled from './UserAddressStyled';

const UserAddress = ({ withEdit }) => {
  // userId otrzymane z contextu lub propsa

  // TODO co w przypadku kiedy nie znajdziemy id ?

  const userId = '1a0b079c-3d93-4fc0-a391-114e0f1d2004';
  let userObject = PARTICIPANTS.find(
    (participant) => participant.id === userId,
  );

  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };

  const submitForm = () => {};

  return (
<<<<<<< HEAD
    <>
      <UserAddressStyled>
        <div className="address-container">
          <p>{`${userObject.street} ${userObject.numberOfHosue}`}</p>
          <p>{`${userObject.postalCode} ${userObject.city}`}</p>
        </div>
        {withEdit && (
          <button className="edit-btn" onClick={toggleHandler} toggle="true">
            edytuj dane
          </button>
        )}
      </UserAddressStyled>
      {toggle && (
        <>
          <RegistrationFormSignup submitForm={submitForm} editData />
        </>
      )}
    </>
=======
    <UserAddressStyled>
      <p>{`${userObject.street} ${userObject.numberOfHouse}`}</p>
      <p>{`${userObject.postalCode} ${userObject.city}`}</p>
    </UserAddressStyled>
>>>>>>> development
  );
};

UserAddress.propTypes = {
  withEdit: propTypes.bool,
  toggle: propTypes.bool,
};

export default UserAddress;
