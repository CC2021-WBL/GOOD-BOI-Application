import { DOG_ACTIONS } from '../Consts/reducersActions';

const dogReducer = (state, action) => {
  switch (action.type) {
    case DOG_ACTIONS.GET_DATA:
      return { state };
    case DOG_ACTIONS.UPDATE_ONE_FIELD:
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    case DOG_ACTIONS.UPDATE_MANY_FIELDS:
      return {
        ...state,
        ...action.payload,
      };
    case DOG_ACTIONS.SET_DATA:
      return { ...action.payload };
    case DOG_ACTIONS.CLEAR_CHOSEN_DOG:
      return {
        chosenDog: {},
      };
    default:
      return state;
  }
};

export default dogReducer;
