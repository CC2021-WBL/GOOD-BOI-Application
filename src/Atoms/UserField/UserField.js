import propTypes from 'prop-types';
import { useState } from 'react';

import RegistrationFormSignup from '../../Organisms/RegistrationForm/RegistrationFormSignup';
import UserFieldStyled from './UserFieldStyled';

const UserField = ({ email, password, text }) => {
  const userEmail = 'emailusera@gmail.com';
  const userPassword = '***********';

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
      {toggle && (
        <>
          <RegistrationFormSignup submitForm={submitForm} editData />
        </>
      )}
    </>
  );
};

UserField.propTypes = {
  toggle: propTypes.bool,
  email: propTypes.bool,
  text: propTypes.string,
  password: propTypes.bool,
};

export default UserField;
