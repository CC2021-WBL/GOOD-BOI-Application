import { createContext, useReducer } from 'react';

import propTypes from 'prop-types';
import userReducer from '../Reducers/userReducer';

export const UserDataContext = createContext();

const initialData = {
  isAuthenticated: false,
  userId: null,
  userName: null,
  userSurname: null,
  roles: null,
};

export function UserDataProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialData);

  return (
    <UserDataContext.Provider value={{ state, dispatch }}>
      {children}
    </UserDataContext.Provider>
  );
}

UserDataProvider.propTypes = {
  children: propTypes.node,
};
