import { CONTEST_ACTIONS } from '../Consts/reducersActions';

const contestReducer = (state, action) => {
  switch (action.type) {
    case CONTEST_ACTIONS.SET_CONTEST:
      return { ...state, ...action.payload };
    case CONTEST_ACTIONS.UPDATE_CONTEST:
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    case CONTEST_ACTIONS.CLEAR:
      return {
        contestId: null,
        contestName: null,
        contestAddress: null,
        contestStartDate: null,
      };

    default:
      return state;
  }
};

export default contestReducer;
