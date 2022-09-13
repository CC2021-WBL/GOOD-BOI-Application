import { createContext, useReducer } from 'react';

import propTypes from 'prop-types';
import userReducer from '../Reducers/userReducer';
import {
  genRequestOptionsPOST,
  requestOptionsGET,
} from '../Tools/FetchData/requestOptions';
import { USER_ACTIONS } from '../Consts/reducersActions';
import { useEffect } from 'react';
import { fetchUserDataByJwt } from '../Hooks/QueryHooks/useUserDataByJwt';

export const UserDataContext = createContext();

const initialData = {
  isAuthenticated: false,
  userId: null,
  userName: null,
  userSurname: null,
  roles: null,
  selectedRole: null,
  userNameConfirmed: null,
};

export function UserDataProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialData);

  useEffect(() => {
    fetchUserDataByJwt().then((res) => {
      dispatch({
        type: USER_ACTIONS.LOG_IN,
        payload: {
          userId: res._id,
          userName: res.participantName,
          userSurname: res.participantSurname,
          roles: res.portalRoles,
        },
      });
    });
  }, []);

  const login = async (data, dispatch, navigate) => {
    try {
      const response = await fetch(
        '/api/users/login',
        genRequestOptionsPOST(data),
      );
      if (response.status === 200) {
        const result = await response.json();

        dispatch({
          type: USER_ACTIONS.LOG_IN,
          payload: {
            userId: result.user.userId,
            userName: result.user.userName,
            userSurname: result.user.userSurname,
            roles: result.user.roles,
          },
        });
        navigate('/role');
      } else {
        alert('Nieprawidłowe dane');
      }
    } catch (error) {
      console.log(error);
      navigate('/');
    }
  };

  const logout = () => {
    fetch('/api/users/logout', requestOptionsGET)
      .then((response) => response.text())
      .then((result) => {
        dispatch({ type: 'LOG_OUT', index: 1 });
      })
      .catch((error) => alert(error));
  };

  return (
    <UserDataContext.Provider value={{ state, login, logout, dispatch }}>
      {children}
    </UserDataContext.Provider>
  );
}

UserDataProvider.propTypes = {
  children: propTypes.node,
};
