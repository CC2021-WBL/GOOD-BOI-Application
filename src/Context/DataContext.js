import { createContext, useContext, useState } from 'react';

import participants from '../Data/MongoDBMock/participants';
import propTypes from 'prop-types';
import { useEffect } from 'react/cjs/react.development';

export const UserDataContext = createContext();
const UpdateUserContext = createContext();

export function useUserContext() {
  return useContext(UserDataContext);
}

export function useUpdateUserContext() {
  return useContext(UpdateUserContext);
}

const initialData = {
  userId: participants[0].participantId,
  userName: participants[0].participantName,
  userSurname: participants[0].participantSurname,
  roles: participants[0].portalRoles,
};

export function UserDataProvider({ children }) {
  //const [state, dispatch] = useReducer(reducer, initialData);
  const [state, setState] = useState(initialData);

  function updateData() {
    const data = {
      userId: participants[0].participantId,
      // userName: participants[0].participantName,
      userName: 'Kaszotto',
      userSurname: participants[0].participantSurname,
      roles: participants[0].portalRoles,
    };
    setState(data);
  }

  useEffect(() => {
    // tu pobierane dane z DB?
    const data = {
      userId: participants[0].participantId,
      userName: participants[0].participantName,
      userSurname: participants[0].participantSurname,
      roles: participants[0].portalRoles,
    };
    setState(data);
  }, []);

  return (
    <UserDataContext.Provider value={state}>
      <UpdateUserContext.Provider value={updateData}>
        {children}
      </UpdateUserContext.Provider>
    </UserDataContext.Provider>
  );
}

UserDataProvider.propTypes = {
  children: propTypes.node,
};
