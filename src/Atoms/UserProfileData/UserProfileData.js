import propTypes from 'prop-types';

import UserProfileDataStyled from './UserProfileDataStyled';
import participants from '../../Data/MongoDBMock/participants';

const UserProfileData = ({ userId }) => {
  const userObject = participants.find(
    (participant) => participant.participantId === userId,
  );
  return (
    <UserProfileDataStyled>
      <h3>{`${userObject.participantName} ${userObject.participantSurname}`}</h3>
      <p>{`${userObject.adress.street} ${userObject.adress.numberOfHouse}`}</p>
      <p>{`${userObject.adress.postalCode} ${userObject.adress.city}`}</p>
    </UserProfileDataStyled>
  );
};

UserProfileData.propTypes = {
  userId: propTypes.string,
};

export default UserProfileData;
