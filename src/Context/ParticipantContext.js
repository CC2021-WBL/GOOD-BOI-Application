import { createContext, useState } from 'react';

import participants from '../Data/MongoDBMock/participants';
import propTypes from 'prop-types';
import { useEffect } from 'react/cjs/react.development';

export const ParticipantContext = createContext();

export function ParticipantContextProvider({ children }) {
  const [participantData, setParticipantData] = useState();

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
    setParticipantData(data);
  }, []);

  return (
    <ParticipantContext.Provider
      value={{ participantData, setParticipantData }}
    >
      {children}
    </ParticipantContext.Provider>
  );
}

ParticipantContextProvider.propTypes = {
  children: propTypes.node,
};
