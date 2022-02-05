import propTypes from 'prop-types';
import { useContext } from 'react';

import UserProfileDataStyled from './UserProfileDataStyled';
import participants from '../../Data/MongoDBMock/participants';
import { UserDataContext } from '../../Context/UserDataContext';

const UserProfileData = () => {
  const { state } = useContext(UserDataContext);
  const { userId, userName, userSurname } = state;
  const userObject = participants.find(
    (participant) => participant.participantId === userId,
  );
  const { address } = userObject;
  const { street, numberOfHouse, city, postalCode } = address;

  return (
    <UserProfileDataStyled>
      <h3>{`${userName} ${userSurname}`}</h3>
      <p>{`${street} ${numberOfHouse}`}</p>
      <p>{`${postalCode} ${city}`}</p>
    </UserProfileDataStyled>
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
};

export default UserProfileData;
