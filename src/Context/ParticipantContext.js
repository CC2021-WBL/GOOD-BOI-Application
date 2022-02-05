import propTypes from 'prop-types';
import { createContext, useReducer } from 'react';

import participantReducer from '../Reducers/participantReducer';
import participants from '../Data/MongoDBMock/participants';

export const ParticipantContext = createContext();

const initialData = {
  dogs: participants[0].dogs,
  country: participants[0].address.country,
  city: participants[0].address.city,
  street: participants[0].address.street,
  numberOfHouse: participants[0].address.numberOfHouse,
  postalCode: participants[0].address.postalCode,
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
