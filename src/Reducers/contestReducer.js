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
        contestId: '',
        contestName: '',
      };

    default:
      console.log('error');
  }
};

export default contestReducer;
