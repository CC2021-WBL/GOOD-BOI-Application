import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ProfileCard from '../../Molecules/ProfileCard/ProfileCard';
import UserField from '../../Atoms/UserField/UserField';
import useMediaQuery from '../../Hooks/useMediaQuery';
import { UserDataContext } from '../../Context/UserDataContext';
import useUserData from '../../Hooks/QueryHooks/useUserData';
import Spinner from '../../Atoms/Spinner/Spinner';

const UserData = () => {
  const [fetchErrors, setFetchErrors] = useState(null);
  const { state } = useContext(UserDataContext);
  const { userId, isAuthenticated } = state;
  const paramsUserData = useParams();
  const isBigScreen = useMediaQuery('(min-width:800px)');

  let currentUserId = userId;
  if (!currentUserId) {
    currentUserId = paramsUserData.userId;
  }

  const { data, isSuccess, isError, error, isLoading } = useUserData(
    currentUserId,
    true,
  );

  const [userObject, setUserObject] = useState(data);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    console.log(error);
  }

  if (!data) {
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
          initialState={data}
          className="user-data-profile-card"
          isBigScreen={isBigScreen}
          userData={data}
          fetchErrors={fetchErrors}
        />
        <UserField
          text="zmień email"
          email
          userEmail={data.email}
          initialState={data}
          setUserObject={setUserObject}
        />
        <UserField
          text="zmień hasło"
          password
          userPassword="***********"
          initialState={data}
          setUserObject={setUserObject}
        />
        <UserField
          text="zmień numer telefonu"
          phoneNumber
          userPhoneNumber={data.phoneNumber}
          initialState={data}
          setUserObject={setUserObject}
        />
      </ColumnWrapper>
    </>
  );
};

export default UserData;
