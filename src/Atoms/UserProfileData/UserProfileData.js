import propTypes from 'prop-types';

import UserProfileDataStyled from './UserProfileDataStyled';
import participants from '../../Data/MongoDBMock/participants';

const UserProfileData = ({ userData }) => {
  const { userId, userName, userSurname } = userData;
  const userObject = participants.find(
    (participant) => participant.participantId === userId,
  );
  const { street, numberOfHouse, city, postalCode } = address;
  const { address } = userObject;

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
