import propTypes from 'prop-types';
import { useState } from 'react';

import RegistrationFormSignup from '../../Organisms/RegistrationForm/RegistrationFormSignup';
import UserFieldStyled from './UserFieldStyled';

const UserField = ({
  email,
  password,
  phoneNumber,
  text,
  userEmail,
  userPassword,
  userPhoneNumber,
  initialState,
}) => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };

  const submitForm = () => {};
  return (
    <>
      <UserFieldStyled>
        {email && <p>{userEmail}</p>}
        {password && <p>{userPassword}</p>}
        {phoneNumber && <p>{userPhoneNumber}</p>}
        <button className="edit-btn" onClick={toggleHandler} toggle="true">
          {text}
        </button>
      </UserFieldStyled>
      {toggle && email && (
        <RegistrationFormSignup
          submitForm={submitForm}
          editEmail
          initialState={initialState}
        />
      )}
      {toggle && password && (
        <RegistrationFormSignup
          submitForm={submitForm}
          editPassword
          initialState={initialState}
        />
      )}
      {toggle && phoneNumber && (
        <RegistrationFormSignup
          submitForm={submitForm}
          editPhoneNumber
          initialState={initialState}
        />
      )}
    </>
  );
};

UserField.propTypes = {
  toggle: propTypes.bool,
  email: propTypes.bool,
  text: propTypes.string,
  data: propTypes.string,
  password: propTypes.bool,
  phoneNumber: propTypes.bool,
  userEmail: propTypes.string,
  userPassword: propTypes.string,
  userPhoneNumber: propTypes.number,
  initialState: propTypes.object,
};

export default UserField;
