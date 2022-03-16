import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ProfileCard from '../../Molecules/ProfileCard/ProfileCard';
import UserField from '../../Atoms/UserField/UserField';
import useMediaQuery from '../../Hooks/useMediaQuery';
import { UserDataContext } from '../../Context/UserDataContext';
import { requestOptionsGET } from '../../FetchData/requestOptions';

const UserData = () => {
  const [userObject, setUserObject] = useState(null);
  const { state } = useContext(UserDataContext);
  const { userId } = state;
  const paramsUserData = useParams();
  const isBigScr = useMediaQuery('(min-width:800px)');

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
      <ColumnWrapper
        paddingLeftRight={1}
        maxWidthBigScr={35}
        className="user-data-wrapper"
      >
        <ProfileCard
          withEdit
          initialState={userObject}
          className="user-data-profile-card"
          isBigScr={isBigScr}
        />
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
