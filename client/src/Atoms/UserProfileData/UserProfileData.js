import propTypes from 'prop-types';
import { FaRegTimesCircle } from 'react-icons/fa';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ErrorPage from '../../PagesBody/ErrorPage/ErrorPage';
import RegistrationFormSignup from '../../Organisms/RegistrationForm/RegistrationFormSignup';
import UserProfileDataStyled from './UserProfileDataStyled';
import createUserInitialData from '../../Tools/createUserInitialData';
import { UserDataContext } from '../../Context/UserDataContext';
import { requestOptionsGET } from '../../Tools/FetchData/requestOptions';

const UserProfileData = ({
  withEdit,
  initialState,
  className,
  isBigScreen,
}) => {
  const navigate = useNavigate();
  const { state } = useContext(UserDataContext);
  const { userId, userName, userSurname, isAuthenticated } = state;
  const [errors, setErrors] = useState(null);
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
      async function getUserProfileData() {
        try {
          let response = await fetch(
            `/api/users/${userData}?taker=profile`,
            requestOptionsGET,
          );
          if (!response.ok) {
            throw Error('Twoja stara to andrzej duda');
            // navigate('/login');
          } else {
            response = await response.json();
            setUserObject(response);
          }
        } catch (error) {
          setErrors(error.message);
          console.log(error);
        }
      }

      getUserProfileData();
    }
    if (isBigScreen) {
      return setToggle(true);
    }
  }, []);

  return (
    <>
      {errors ? (
        <ErrorPage message={errors}></ErrorPage>
      ) : (
        <>
          <UserProfileDataStyled withEdit={withEdit} className={className}>
            <div className="user-data-wrapper">
              {state && userObject ? (
                <>
                  <h3>{`${participantName} ${participantSurname}`}</h3>
                  <p>{`${street} ${numberOfHouse}`}</p>
                  <p>{`${postalCode} ${city}`}</p>
                </>
              ) : (
                <>
                  <h3>{`${userName} ${userSurname}`}</h3>
                </>
              )}
              <></>
            </div>
            {withEdit && (
              <>
                <div className="bg-box tablet_only" />
                <button
                  className="user-data-edit-btn"
                  onClick={toggleHandler}
                  toggle="true"
                >
                  {!toggle ? (
                    'edytuj dane'
                  ) : (
                    <FaRegTimesCircle className="user-data-edit-close" />
                  )}
                </button>
              </>
            )}
          </UserProfileDataStyled>
          {toggle && withEdit && (
            <RegistrationFormSignup
              submitForm={submitForm}
              editData
              initialState={initialState}
              setUserObject={setUserObject}
            />
          )}
        </>
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
