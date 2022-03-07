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

  const changeInitialData = () => {
    let modifiedInitialState = {};
    console.log(chosenDog);
    try {
      if ('dogId' in chosenDog) {
        console.log(chosenDog);
        fetch(`/api/dogs/${chosenDog.dogId}`, requestOptionsGET)
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            Object.keys(dogFormInitialState).forEach((key) => {
              modifiedInitialState[key] = result[key];
            });
            setInitialStateOfDogForm(modifiedInitialState);
          })
          .catch((error) => console.log(error));
      } else {
        console.log(dogFormInitialState);
        setInitialStateOfDogForm(dogFormInitialState);
      }
    } catch (error) {
      setInitialStateOfDogForm(dogFormInitialState);
    }
  };

  useEffect(() => {
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

  return (
    <ColumnWrapper paddingLeftRight={1}>
      {!isSubmitted && initialStateOfDogForm ? (
        <DogForm submitForm={submitForm} initialState={initialStateOfDogForm} />
      ) : null}
    </ColumnWrapper>
  );
};

export default DogFormPage;
