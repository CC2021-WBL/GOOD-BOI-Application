import { createContext, useReducer } from 'react';

import participantReducer from '../Reducers/participantReducer';
import participants from '../Data/MongoDBMock/participants';
import propTypes from 'prop-types';

export const ParticipantContext = createContext();

const initialData = {
  dogs: participants[0].dogs,
  country: participants[0].adress.country,
  city: participants[0].adress.city,
  street: participants[0].adress.street,
  numberOfHouse: participants[0].adress.numberOfHouse,
  postalCode: participants[0].adress.postalCode,
};

export function ParticipantContextProvider({ children }) {
  const [participantData, dispatch] = useReducer(
    participantReducer,
    initialData,
  );

  return (
    <ParticipantContext.Provider value={{ participantData, dispatch }}>
      {children}
    </ParticipantContext.Provider>
  );
}

ParticipantContextProvider.propTypes = {
  children: propTypes.node,
};
