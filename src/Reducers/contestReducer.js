const ACTIONS = {
  SET_CONTEST: 'SET_CONTEST',
  UPDATE_CONTEST: 'UPDATE_CONTEST',
};

const contestReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_CONTEST:
      return {
        isAuthenticated: true,
        contestId: action.payload.contestId,
        contestName: action.payload.contestName,
      };
    case ACTIONS.UPDATE_CONTEST:
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
  }
};

export default contestReducer;
