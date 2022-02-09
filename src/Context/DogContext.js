import { createContext, useReducer } from 'react';

import dogReducer from '../Reducers/dogReducer';
import propTypes from 'prop-types';

export const DogContext = createContext();

const initialData = {
  dogs: [],
  chosenDog: {},
};

export function DogContextProvider({ children }) {
  const [dogState, dogDispatch] = useReducer(dogReducer, initialData);
  return (
    <DogContext.Provider value={{ dogState, dogDispatch }}>
      {children}
    </DogContext.Provider>
  );
}

DogContextProvider.propTypes = {
  children: propTypes.node,
};
