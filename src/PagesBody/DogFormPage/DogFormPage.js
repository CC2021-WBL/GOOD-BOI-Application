/* eslint-disable no-unused-vars */

import { useContext, useEffect, useState } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import { DogContext } from '../../Context/DogContext';
import DogForm from '../../Organisms/DoggoForm/DogForm';
import { dogFormInitialState } from '../../Consts/formsInitialStates';
import doggos from '../../Data/MongoDBMock/doggos';
import { useNavigate } from 'react-router-dom';

const DogFormPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const { dogState, dogDispatch } = useContext(DogContext);
  const { dogs, chosenDog } = dogState;
  const [initialStateOfDogForm, setInitialStateOfDogForm] =
    useState(dogFormInitialState);
  const navigate = useNavigate();
  console.log(dogState);
  console.log(initialStateOfDogForm);

  const changeInitialData = () => {
    let modifiedInitialState = {};
    try {
      if (chosenDog !== undefined && chosenDog !== null) {
        const dogFromDB = doggos.find((dog) => dog.dogId === chosenDog.dogId);
        Object.keys(dogFormInitialState).forEach((key) => {
          modifiedInitialState[key] = dogFromDB[key];
        });

        setInitialStateOfDogForm(modifiedInitialState);
        console.log('try');
        console.log(modifiedInitialState);
      }
    } catch (error) {
      console.log('catch');
      setInitialStateOfDogForm(dogFormInitialState);
    }
  };

  useEffect(() => {
    console.log('useEffect');
    changeInitialData();
    setIsUpdated(true);
    return () => {
      setIsUpdated(false);
      //setInitialStateOfDogForm(dogFormInitialState);
    };
  }, [isUpdated]);

  function submitForm(dogData) {
    console.log(dogData);
    setIsSubmitted(true);
    dogDispatch({
      type: 'UPDATE_ONE_FIELD',
      fieldName: 'dogs',
      payload: dogs.push({ dogId: dogData.dogId, dogName: dogData.dogName }),
    });
    navigate(-1);
  }

  console.log(initialStateOfDogForm);
  return (
    <ColumnWrapper paddingLeftRight={1}>
      {!isSubmitted ? (
        <DogForm submitForm={submitForm} initialState={initialStateOfDogForm} />
      ) : null}
    </ColumnWrapper>
  );
};

export default DogFormPage;
