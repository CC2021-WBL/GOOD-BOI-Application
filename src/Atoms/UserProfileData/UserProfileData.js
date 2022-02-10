import propTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import RegistrationFormSignup from '../../Organisms/RegistrationForm/RegistrationFormSignup';
import UserProfileDataStyled from './UserProfileDataStyled';
import createUserInitialData from '../../Tools/createUserInitialData';
import participants from '../../Data/MongoDBMock/participants';
import { UserDataContext } from '../../Context/UserDataContext';

const UserProfileData = ({ withEdit }) => {
  const navigate = useNavigate();
  const { state } = useContext(UserDataContext);
  const { userId, userName, userSurname, isAuthenticated } = state;
  // const paramsUserData = useParams();

  // let userData = userId;
  // if (!userData) {
  //   userData = paramsUserData.userId;
  // }
  const [userObject, setUserObject] = useState(createUserInitialData(userName));

  // mock for checking authentication and if userId is in database
  // const { pathname } = useLocation();
  // if (!isAuthenticated) {
  //   try {
  //     const userId = pathname.split('/').pop();
  //     const userObject = participants.find(
  //       (participant) => participant.participantId === userId,
  //     );
  //     dispatch({ type: 'LOG_IN' });
  //     setUserObject(userObject);
  //   } catch (err) {
  //     throw new Error('Your not allowed to be here!');
  //   }
  // }

  const { address, participantName, participantSurname } = userObject;
  const { street, numberOfHouse, city, postalCode } = address;

  // mock for fetching data from database and checking if response has data

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
    const userObject = participants.find(
      (participant) => participant.participantId === userId,
    );
    if (!userObject) {
      navigate('/login');
    } else {
      setUserObject(userObject);
    }
  }, []);

  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };

  const submitForm = () => {};

  return (
    <>
      <UserProfileDataStyled withEdit={withEdit}>
        {state && userObject ? (
          <h3>{`${participantName} ${participantSurname}`}</h3>
        ) : (
          <h3>{`${userName} ${userSurname}`}</h3>
        )}

        <p>{`${street} ${numberOfHouse}`}</p>
        <p>{`${postalCode} ${city}`}</p>
        {withEdit && (
          <button className="edit-btn" onClick={toggleHandler} toggle="true">
            edytuj dane
          </button>
        )}
      </UserProfileDataStyled>
      {toggle && <RegistrationFormSignup submitForm={submitForm} editData />}
    </>
  );
};

UserProfileData.propTypes = {
  userData: propTypes.shape({
    isAuthenticated: propTypes.bool.isRequired,
    userId: propTypes.string.isRequired,
    userName: propTypes.string,
    userSurname: propTypes.string,
    roles: propTypes.arrayOf(propTypes.string),
  }),
  withEdit: propTypes.bool,
};

export default UserProfileData;
