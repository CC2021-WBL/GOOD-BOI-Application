import contests from '../Data/MongoDBMock/contests';

const ACTIONS = {
  SET_CONTEST: 'SET_CONTEST',
  UPDATE_CONTEST: 'UPDATE_CONTEST',
  SET_MOCK: 'SET_MOCK',
};

const contestReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_CONTEST:
      return { ...state, ...action.payload };
    case ACTIONS.UPDATE_CONTEST:
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    case ACTIONS.SET_MOCK:
      return {
        contestId: contests[0].contestId,
        contestName: contests[0].contestName,
      };
    default:
      console.log('error');
  }
};

export default contestReducer;
