import participants from '../Data/MongoDBMock/participants';

const ACTIONS = {
  GET_DATA: 'GET_DATA',
  UPDATE_ONE_FIELD: 'UPDATE_ONE_FIELD',
  UPDATE_MANY_FIELDS: 'UPDATE_MANY_FIELDS',
  SET_DATA: 'SET_DATA',
};

const dogReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_DATA:
      return { state };
    case ACTIONS.UPDATE_ONE_FIELD:
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    case ACTIONS.UPDATE_MANY_FIELDS:
      return {
        ...state,
        ...action.payload,
      };
    case ACTIONS.SET_DATA:
      return { ...action.payload };
    case 'SET_MOCK':
      return {
        dogs: participants[0].dogs,
        chosenDog: participants[0].dogs[1],
      };
  }
};

export default dogReducer;
