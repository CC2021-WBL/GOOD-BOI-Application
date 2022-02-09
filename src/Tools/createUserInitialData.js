import participants from '../Data/MongoDBMock/participants';

const createUserInitialData = (userId) => {
  const userData = participants.find(
    (participant) => participant.participantId === userId,
  );
  return userData;
};

export default createUserInitialData;
