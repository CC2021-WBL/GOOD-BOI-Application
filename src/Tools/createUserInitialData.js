import participants from '../Data/MongoDBMock/participants';

const createUserInitialData = (userId) => {
  const setUserData = participants.find(
    (participant) => participant.participantId === userId,
  );
  return setUserData;
};

export default createUserInitialData;
