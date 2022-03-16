import propTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import RegistrationFormSignup from '../../Organisms/RegistrationForm/RegistrationFormSignup';
import UserProfileDataStyled from './UserProfileDataStyled';
import createUserInitialData from '../../Tools/createUserInitialData';
import { UserDataContext } from '../../Context/UserDataContext';
import { requestOptionsGET } from '../../FetchData/requestOptions';

const UserProfileData = ({
  withEdit,
  initialState,
  className,
  isBigScreen,
}) => {
  const navigate = useNavigate();
  const { state } = useContext(UserDataContext);
  const { userId, userName, userSurname, isAuthenticated } = state;
  const paramsUserData = useParams();

  let userData = userId;
  if (!userData) {
    userData = paramsUserData.userId;
  }
  const [userObject, setUserObject] = useState(createUserInitialData(state));

  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };

  const submitForm = () => {};

  const { address, participantName, participantSurname } = userObject;
  const { street, numberOfHouse, city, postalCode } = address;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      fetch(`/api/users/${userData}?taker=profile`, requestOptionsGET)
        .then((response) => response.json())
        .then((result) => {
          if (!result) {
            navigate('/login');
          } else {
            setUserObject(result);
          }
        })
        .catch((error) => console.log('error', error));
    }
    if (isBigScreen) {
      return setToggle(true);
    }
  }, []);

  return (
    <>
      <UserProfileDataStyled withEdit={withEdit} className={className}>
        <div className="user-data-wrapper">
          {state && userObject ? (
            <h3>{`${participantName} ${participantSurname}`}</h3>
          ) : (
            <h3>{`${userName} ${userSurname}`}</h3>
          )}

          <p>{`${street} ${numberOfHouse}`}</p>
          <p>{`${postalCode} ${city}`}</p>
        </div>
        {withEdit && (
          <>
            <div className="bg-box tablet_only"></div>
            <button
              className="user-data-edit-btn"
              onClick={toggleHandler}
              toggle="true"
            >
              edytuj dane
            </button>
          </>
        )}
      </UserProfileDataStyled>
      {toggle && withEdit && (
        <RegistrationFormSignup
          submitForm={submitForm}
          editData
          initialState={initialState}
        />
      )}
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
  initialState: propTypes.object,
};

export default UserProfileData;
