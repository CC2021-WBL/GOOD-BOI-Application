import propTypes from 'prop-types';

import UserProfileDataStyled from './UserProfileDataStyled';
import participants from '../../Data/MongoDBMock/participants';

const UserProfileData = ({ userData }) => {
  const userObject = participants.find(
    (participant) => participant.participantId === userData.userId,
  );
  return (
    <UserProfileDataStyled>
      <h3>{`${userData.userName} ${userData.userSurname}`}</h3>
      <p>{`${userObject.adress.street} ${userObject.adress.numberOfHouse}`}</p>
      <p>{`${userObject.adress.postalCode} ${userObject.adress.city}`}</p>
    </UserProfileDataStyled>
  );
};

UserProfileData.propTypes = {
  userData: propTypes.object,
};

export default UserProfileData;
