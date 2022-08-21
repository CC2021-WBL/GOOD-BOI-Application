import propTypes from 'prop-types';
import { FaRegTimesCircle } from 'react-icons/fa';
import { useContext, useState } from 'react';

import ErrorComponent from '../../PagesBody/ErrorPage/ErrorComponent';
import RegistrationFormSignup from '../../Organisms/RegistrationForm/RegistrationFormSignup';
import UserProfileDataStyled from './UserProfileDataStyled';
import createUserInitialData from '../../Tools/createUserInitialData';
import { UserDataContext } from '../../Context/UserDataContext';

const UserProfileData = ({
  withEdit,
  initialState,
  className,
  isBigScreen,
  userData,
  fetchErrors
}) => {
  const { state,} = useContext(UserDataContext);
  const { userName, userSurname } = state;

  console.log(userData)
  const [userObject, setUserObject] = useState(createUserInitialData(state));
  const [toggle, setToggle] = useState(isBigScreen);

  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };

  const submitForm = () => {};

  const { address, participantName, participantSurname } = userObject;
  const { street, numberOfHouse, city, postalCode } = address;


  return (
    <>
      {fetchErrors ? (
        <ErrorComponent message={fetchErrors} />
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
  // userData: propTypes.shape({
  //   userId: propTypes.string.isRequired,
  //   userName: propTypes.string,
  //   userSurname: propTypes.string,
  //   roles: propTypes.arrayOf(propTypes.string),
  // }),
  withEdit: propTypes.bool,
  initialState: propTypes.object,
};

export default UserProfileData;
