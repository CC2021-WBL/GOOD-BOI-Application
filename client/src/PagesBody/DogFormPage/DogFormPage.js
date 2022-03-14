import { useContext, useEffect, useState } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import { DogContext } from '../../Context/DogContext';
import DogForm from '../../Organisms/DoggoForm/DogForm';
import { dogFormInitialState } from '../../Consts/formsInitialStates';
import { requestOptionsGET } from '../../FetchData/requestOptions';
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
      console.log(chosenDog);
      try {
        if ('dogId' in chosenDog) {
          const response = await fetch(
            `/api/dogs/${chosenDog.dogId}`,
            requestOptionsGET,
          );
          const result = await response.json();

          Object.keys(dogFormInitialState).forEach((key) => {
            if (key === 'dateOfBirth') {
              modifiedInitialState[key] = new Date(result[key]);
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
    console.log(dogData);
    console.log(dogs);
    setIsSubmitted(true);
    if (!dogs.find((dog) => dog.dogId === dogData.dogId)) {
      dogDispatch({
        type: 'UPDATE_ONE_FIELD',
        fieldName: 'dogs',
        payload: dogs.push({ dogId: dogData.dogId, dogName: dogData.dogName }),
      });
    }

    navigate(-1);
  }

  console.log(initialStateOfDogForm);
  return (
    <ColumnWrapper paddingLeftRight={1}>
      {!isSubmitted && initialStateOfDogForm ? (
        <DogForm submitForm={submitForm} initialState={initialStateOfDogForm} />
      ) : null}
    </ColumnWrapper>
  );
};

export default DogFormPage;
