/* eslint-disable react/prop-types */

import { createContext, useEffect, useReducer } from 'react';

import { exercisesReducer } from './../Reducers/exercisesReducer';
import { useParams } from 'react-router-dom';

export const NewContestContext = createContext();

// initial data

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

export const NewContestContextProvider = (props) => {
  const [dogPerformance, dispatch] = useReducer(
    exercisesReducer,
    initialDogPerformance,
  );
  useEffect(() => {
    console.log('useEffect dogPerformance changed');
    localStorage.setItem('dogPerformance', JSON.stringify(dogPerformance));
  }, [dogPerformance]);

  const { contestId, classId, dogId } = useParams();

  console.log('NewContestContext');
  console.log(contestId, classId, dogId);
  console.log(dogPerformance);
  return (
    <NewContestContext.Provider value={{ dogPerformance, dispatch }}>
      {props.children}
    </NewContestContext.Provider>
  );
};
