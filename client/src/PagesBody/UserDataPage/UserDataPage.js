import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ProfileCard from '../../Molecules/ProfileCard/ProfileCard';
import UserField from '../../Atoms/UserField/UserField';
import useMediaQuery from '../../Hooks/useMediaQuery';
import { UserDataContext } from '../../Context/UserDataContext';
import { requestOptionsGET } from '../../Tools/FetchData/requestOptions';
import { USER_ACTIONS } from '../../Consts/reducersActions';
import { generateErrorMessage } from '../../Tools/generateErrorMessage';

const UserData = () => {
  const [userObject, setUserObject] = useState(null);
  const [fetchErrors, setFetchErrors] = useState(null);
  const { state, dispatch } = useContext(UserDataContext);
  const { userId, isAuthenticated } = state;
  const paramsUserData = useParams();
  const isBigScreen = useMediaQuery('(min-width:800px)');

  let currentUserId = userId;
  if (!currentUserId) {
    currentUserId = paramsUserData.userId;
  }

  useEffect(() => {
    if (!isAuthenticated) {
      // checkJwt(setUserObject, dispatch, navigate);

      async function checkJwt() {
        try {
          const response = await fetch(
            '/api/users/jwt',
            requestOptionsGET
          );
          if (response.status === 200) {
            const result = await response.json();
            console.log(result)
      
            dispatch({
              type: USER_ACTIONS.LOG_IN,
              payload: {
                userId: result._id,
                userName: result.participantName,
                userSurname: result.participantSurname,
                roles: result.portalRoles,
              },
            });
            setUserObject(() => result)
          } else {
            console.log(`status: ${response.status}`)
          }
        } catch (error) {
          console.log("error")
          console.log(error);
        }
      }

      checkJwt()
      
    } else {
      async function getUserProfileData() {
        try {
          let response = await fetch(
            `/api/users/${currentUserId}?taker=profile`,
            requestOptionsGET,
          );
          if (!response.ok) {
            throw Error(generateErrorMessage(response.status));
          } else {
            response = await response.json();
            console.log(response)
            setUserObject(response);
          }
        } catch (error) {
          setFetchErrors(error.message);
        }
      }

      getUserProfileData();

      fetch(`/api/users/${currentUserId}`, requestOptionsGET)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setUserObject(result);
      })
      .catch((error) => console.log(error));
    }
    
  }, []);

  if (!userObject) {
    return (
      <p style={{ fontSize: '15px', color: 'grey' }}>
        на хуй путін
        <span style={{ fontSize: '15px', color: 'grey' }}> jebać putina</span>
      </p>
    );
  }

  return (
    <>
      <ColumnWrapper
        paddingLeftRight={1}
        maxWidthBigScreen={35}
        className="user-data-wrapper"
      >
        <ProfileCard
          withEdit
          initialState={userObject}
          className="user-data-profile-card"
          isBigScreen={isBigScreen}
          userData={userObject}
          fetchErrors={fetchErrors}
        />
        <UserField
          text="zmień email"
          email
          userEmail={userObject.email}
          initialState={userObject}
          setUserObject={setUserObject}
        />
        <UserField
          text="zmień hasło"
          password
          userPassword="***********"
          initialState={userObject}
          setUserObject={setUserObject}
        />
        <UserField
          text="zmień numer telefonu"
          phoneNumber
          userPhoneNumber={userObject.phoneNumber}
          initialState={userObject}
          setUserObject={setUserObject}
        />
      </ColumnWrapper>
    </>
  );
};

export default UserData;
