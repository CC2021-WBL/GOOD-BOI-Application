import { USER_ACTIONS } from '../Consts/reducersActions';
import participants from '../Data/MongoDBMock/participants';

const userReducer = (state, action) => {
  switch (action.type) {
    case USER_ACTIONS.LOG_IN:
      return {
        isAuthenticated: true,
        userId: participants[0].participantId,
        userName: participants[0].participantName,
        userSurname: participants[0].participantSurname,
        roles: participants[0].portalRoles,
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
      };
  }
};

export default userReducer;
