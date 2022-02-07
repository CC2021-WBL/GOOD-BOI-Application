const ACTIONS = {
  SET_CONTEST: 'SET_CONTEST',
  UPDATE_CONTEST: 'UPDATE_CONTEST',
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
    default:
      console.log('error');
  }
};

export default contestReducer;
