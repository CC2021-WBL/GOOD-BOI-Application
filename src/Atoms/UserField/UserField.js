import propTypes from 'prop-types';
import { useState } from 'react';

import RegistrationFormSignup from '../../Organisms/RegistrationForm/RegistrationFormSignup';
import UserFieldStyled from './UserFieldStyled';

const UserField = ({ email, password, text, userEmail, userPassword }) => {
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
        <button className="edit-btn" onClick={toggleHandler} toggle="true">
          {text}
        </button>
      </UserFieldStyled>
      {toggle && email && (
        <RegistrationFormSignup submitForm={submitForm} editEmail />
      )}
      {toggle && password && (
        <RegistrationFormSignup submitForm={submitForm} editPassword />
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
  userEmail: propTypes.string,
  userPassword: propTypes.string,
};

export default UserField;
