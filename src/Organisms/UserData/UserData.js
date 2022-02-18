import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ProfileCard from '../../Molecules/ProfileCard/ProfileCard';
import UserField from '../../Atoms/UserField/UserField';
import participants from '../../Data/MongoDBMock/participants';
import { UserDataContext } from '../../Context/UserDataContext';

const UserData = () => {
  const { state } = useContext(UserDataContext);
  const { userId } = state;
  const paramsUserData = useParams();

  let userData = userId;
  if (!userData) {
    userData = paramsUserData.userId;
  }
  const userObject = participants.find(
    (participant) => participant.participantId === userData,
  );

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
          userPassword={userObject.password}
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
