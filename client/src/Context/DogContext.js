import { createContext, useContext, useEffect, useState } from 'react';

import propTypes from 'prop-types';
import { UserDataContext } from './UserDataContext';
import { fetchUserDogs } from '../Hooks/QueryHooks/useUserDogs';

export const DogContext = createContext();

export function DogContextProvider({ children }) {
  const { state } = useContext(UserDataContext);
  const [chosenDog, setChosenDog] = useState({});
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    async function getDogs() {
      const res = await fetchUserDogs(state.userId);
      setDogs(res.dogs);
    }

    getDogs();
  }, [state.userId]);
  return (
    <DogContext.Provider value={{ dogs, setDogs, chosenDog, setChosenDog }}>
      {children}
    </DogContext.Provider>
  );
}

DogContextProvider.propTypes = {
  children: propTypes.node,
};
