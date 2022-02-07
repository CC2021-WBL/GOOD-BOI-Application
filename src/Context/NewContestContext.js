/* eslint-disable react/prop-types */

import { createContext, useReducer } from 'react';

import { exercisesReducer } from './../Reducers/exercisesReducer';
import results from '../Data/MongoDBMock/results';

export const NewContestContext = createContext();

const initialDogPerformance = [
  { codeName: '0.1', result: 0 },
  { codeName: '0.2', result: 0 },
  { codeName: '0.3', result: 0 },
  { codeName: '0.4', result: 0 },
  { codeName: '0.5', result: 0 },
  { codeName: '0.6', result: 0 },
  { codeName: '0.7', result: 0 },
  { codeName: '0.8', result: 0 },
];

const NewContestContextProvider = (props) => {
  const [dogPerformance, dispatch] = useReducer(exercisesReducer, {
    dogPerformance,
  });
  return (
    <NewContestContext.Provider value={{ dogPerformance, dispatch }}>
      {props.children}
    </NewContestContext.Provider>
  );
};
