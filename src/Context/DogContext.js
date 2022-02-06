import { createContext, useReducer } from 'react';

import dogReducer from '../Reducers/dogReducer';
import propTypes from 'prop-types';

export const DogContext = createContext();

const initialData = [];

export function DogContextProvider({ children }) {
  const [state, dispatch] = useReducer(dogReducer, initialData);

  return (
    <DogContext.Provider value={{ state, dispatch }}>
      {children}
    </DogContext.Provider>
  );
}

DogContextProvider.propTypes = {
  children: propTypes.node,
};
