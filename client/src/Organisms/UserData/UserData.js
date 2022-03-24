import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ProfileCard from '../../Molecules/ProfileCard/ProfileCard';
import UserField from '../../Atoms/UserField/UserField';
import useMediaQuery from '../../Hooks/useMediaQuery';
import { UserDataContext } from '../../Context/UserDataContext';
import { requestOptionsGET } from '../../Tools/FetchData/requestOptions';

const UserData = () => {
  const [userObject, setUserObject] = useState(null);
  const { state } = useContext(UserDataContext);
  const { userId } = state;
  const paramsUserData = useParams();
  const isBigScreen = useMediaQuery('(min-width:800px)');

  let userData = userId;
  if (!userData) {
    userData = paramsUserData.userId;
  }

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(`/api/users/${userData}`, requestOptionsGET);
        if (response.status === 200) {
          response = await response.json();
          setUserObject(response);
        } else {
          alert('oops, coś poszło nie tak');
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
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
