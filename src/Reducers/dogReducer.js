import participants from '../Data/MongoDBMock/participants';

const ACTIONS = {
  GET_DATA: 'GET_DATA',
  UPDATE_FIELD: 'UPDATE_FIELD',
  SET_DATA: 'SET_DATA',
};

const dogReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_DATA:
      return {
        dogs: participants[action.index].dogs,
      };
    case ACTIONS.UPDATE_FIELD:
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    case ACTIONS.SET_DATA:
      return { state: action.payload };
  }
};

export default dogReducer;
