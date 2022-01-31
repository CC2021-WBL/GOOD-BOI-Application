import { createContext, useState } from 'react';

import participants from '../Data/MongoDBMock/participants';
import propTypes from 'prop-types';
import { useEffect } from 'react/cjs/react.development';

export const UserDataContext = createContext();

const initialData = {
  userId: participants[0].participantId,
  userName: participants[0].participantName,
  userSurname: participants[0].participantSurname,
  roles: participants[0].portalRoles,
};

export function DataThemeProvider({ children }) {
  //const [state, dispatch] = useReducer(reducer, initialData);
  const [state, setState] = useState(initialData);

  useEffect(() => {
    // tu pobierane dane z DB?
    const data = {
      userId: participants[0].participantId,
      userName: participants[0].participantName,
      userSurname: participants[0].participantSurname,
      roles: participants[0].portalRoles,
    };
    setState(data);
  }, [state]);

  return (
    <UserDataContext.Provider value={state}>
      {children}
    </UserDataContext.Provider>
  );
}

DataThemeProvider.propTypes = {
  children: propTypes.node,
};
