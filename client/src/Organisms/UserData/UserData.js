import { useContext, useEffect, useState } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ProfileCard from '../../Molecules/ProfileCard/ProfileCard';
import { UserDataContext } from '../../Context/UserDataContext';
import UserField from '../../Atoms/UserField/UserField';
import { requestOptionsGET } from '../../Tools/FetchData/requestOptions';
import { useParams } from 'react-router-dom';

const UserData = () => {
  const [userObject, setUserObject] = useState(null);
  const { state } = useContext(UserDataContext);
  const { userId } = state;
  const paramsUserData = useParams();

  let userData = userId;
  if (!userData) {
    userData = paramsUserData.userId;
  }

  useEffect(() => {
    fetch(`/api/users/${userData}`, requestOptionsGET)
      .then((response) => response.json())
      .then((result) => {
        setUserObject(result);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!userObject) {
    return <p></p>;
  }

  return (
    <>
      <ColumnWrapper paddingLeftRight={1}>
        <ProfileCard withEdit initialState={userObject} />
        <UserField
          text="zmień email"
          email
          userEmail={userObject.email}
          initialState={userObject}
        />
        <UserField
          text="zmień hasło"
          password
          userPassword="***********"
          initialState={userObject}
        />
        <UserField
          text="zmień numer telefonu"
          phoneNumber
          userPhoneNumber={userObject.phoneNumber}
          initialState={userObject}
        />
      </ColumnWrapper>
    </>
  );
};

export default UserData;
