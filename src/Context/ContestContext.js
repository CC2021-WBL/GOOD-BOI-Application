import { createContext, useReducer } from 'react';

import contestReducer from '../Reducers/dogReducer';
import propTypes from 'prop-types';

export const ContestContext = createContext();

const initialData = {};

export function ContestContextProvider({ children }) {
  const [state, dispatch] = useReducer(contestReducer, initialData);

  return (
    <ContestContext.Provider value={{ state, dispatch }}>
      {children}
    </ContestContext.Provider>
  );
}

ContestContextProvider.propTypes = {
  children: propTypes.node,
};
