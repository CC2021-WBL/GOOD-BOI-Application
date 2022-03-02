import { USER_ACTIONS } from '../Consts/reducersActions';
import participants from '../Data/MongoDBMock/participants';

const userReducer = (state, action) => {
  switch (action.type) {
    case USER_ACTIONS.LOG_IN:
      console.log(action);
      return {
        isAuthenticated: true,
        userId: action.payload.userId,
        userName: action.payload.userName,
        userSurname: action.payload.userSurname,
        roles: action.payload.roles,
      };
    case USER_ACTIONS.LOG_OUT:
      return {
        isAuthenticated: false,
        userId: null,
        userName: null,
        userSurname: null,
        roles: null,
      };
    case USER_ACTIONS.UPDATE_FIELD:
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    case USER_ACTIONS.CHANGE_USER:
      return {
        isAuthenticated: true,
        userId: participants[action.index].participantId,
        userName: participants[action.index].participantName,
        userSurname: participants[action.index].participantSurname,
        roles: participants[action.index].portalRoles,
      };
    case USER_ACTIONS.CLEAR_SELECTED_ROLE:
      return {
        ...state,
        selectedRole: null,
      };
    case USER_ACTIONS.SELECT_ROLE:
      return {
        ...state,
        selectedRole: action.selectedRole,
      };
    default:
      return state;
  }
};

export default userReducer;
