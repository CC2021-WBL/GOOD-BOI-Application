import participants from '../Data/MongoDBMock/participants';

const ACTIONS = {
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT',
  UPDATE_FIELD: 'UPDATE_FIELD',
  CHANGE_USER: 'CHANGE_USER',
};

const userReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOG_IN:
      return {
        isAuthenticated: true,
        userId: participants[0].participantId,
        userName: participants[0].participantName,
        userSurname: participants[0].participantSurname,
        roles: participants[0].portalRoles,
      };
    case ACTIONS.LOG_OUT:
      return {
        isAuthenticated: false,
        userId: null,
        userName: null,
        userSurname: null,
        roles: null,
      };
    case ACTIONS.UPDATE_FIELD:
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    case ACTIONS.CHANGE_USER:
      return {
        isAuthenticated: true,
        userId: participants[action.index].participantId,
        userName: participants[action.index].participantName,
        userSurname: participants[action.index].participantSurname,
        roles: participants[action.index].portalRoles,
      };
  }
};

export default userReducer;
