import {
  getDataFormatDdMmhYyy,
  getDataFormatYyyyMmDD,
} from '../../Tools/TimeFunctions';
import { useContext, useEffect, useState } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import { DogContext } from '../../Context/DogContext';
import DogForm from '../../Organisms/DoggoForm/DogForm';
import { dogFormInitialState } from '../../Consts/formsInitialStates';
import { requestOptionsGET } from '../../Tools/FetchData/requestOptions';
import { useNavigate } from 'react-router-dom';

const DogFormPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { dogState, dogDispatch } = useContext(DogContext);
  const { dogs, chosenDog } = dogState;
  const [initialStateOfDogForm, setInitialStateOfDogForm] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const changeInitialData = async () => {
      let modifiedInitialState = {};
      try {
        if ('dogId' in chosenDog) {
          const response = await fetch(
            `/api/dogs/${chosenDog.dogId}`,
            requestOptionsGET,
          );
          const result = await response.json();

          Object.keys(dogFormInitialState).forEach((key) => {
            if (key === 'dateOfBirth') {
              modifiedInitialState[key] = getDataFormatYyyyMmDD(result[key]);
            } else {
              modifiedInitialState[key] = result[key];
            }
          });
          setInitialStateOfDogForm(modifiedInitialState);
        } else {
          setInitialStateOfDogForm(dogFormInitialState);
        }
      } catch (error) {
        setInitialStateOfDogForm(dogFormInitialState);
      }
    };

    changeInitialData();
  }, []);

  function submitForm(dogData) {
    setIsSubmitted(true);
    if (!dogs.find((dog) => dog.dogId === dogData._id)) {
      dogDispatch({
        type: 'UPDATE_ONE_FIELD',
        fieldName: 'dogs',
        payload: dogs.push({ dogId: dogData._id, dogName: dogData.dogName }),
      });
    }

    navigate(-1);
  }

  return (
    <ColumnWrapper paddingLeftRight={1}>
      {!isSubmitted && initialStateOfDogForm ? (
        <DogForm submitForm={submitForm} initialState={initialStateOfDogForm} />
      ) : null}
    </ColumnWrapper>
  );
};

export default DogFormPage;
