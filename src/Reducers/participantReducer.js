import participants from '../Data/MongoDBMock/participants';

const ACTIONS = {
  GET_DATA: 'GET_DATA',
  UPDATE_FIELD: 'UPDATE_FIELD',
};

const participantReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_DATA:
      return {
        dogs: participants[action.index].dogs,
        country: participants[action.index].adress.country,
        city: participants[action.index].adress.city,
        street: participants[action.index].adress.street,
        numberOfHouse: participants[action.index].adress.numberOfHouse,
        postalCode: participants[action.index].adress.postalCode,
      };
    case ACTIONS.UPDATE_FIELD:
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
  }
};

export default participantReducer;
