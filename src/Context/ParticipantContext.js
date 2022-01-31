import { createContext, useState } from 'react';

import participants from '../Data/MongoDBMock/participants';
import propTypes from 'prop-types';
import { useEffect } from 'react/cjs/react.development';

export const ParticipantContext = createContext();

const initialData = {
  dogs: participants[0].dogs,
  country: participants[0].country,
  city: participants[0].city,
  street: participants[0].street,
  numberOfHouse: participants[0].numberOfHouse,
  postalCode: participants[0].postalCode,
};

export function ParticipantContextProvider({ children }) {
  const [state, setState] = useState(initialData);

  useEffect(() => {
    // tu pobierane dane z DB?
    const data = {
      dogs: participants[0].dogs,
      country: participants[0].country,
      city: participants[0].city,
      street: participants[0].street,
      numberOfHouse: participants[0].numberOfHouse,
      postalCode: participants[0].postalCode,
    };
    setState(data);
  }, [state]);

  return (
    <ParticipantContext.Provider value={state}>
      {children}
    </ParticipantContext.Provider>
  );
}

ParticipantContextProvider.propTypes = {
  children: propTypes.node,
};
