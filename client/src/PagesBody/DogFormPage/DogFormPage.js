import { useContext, useEffect, useState } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import { DogContext } from '../../Context/DogContext';
import DogForm from '../../Organisms/DoggoForm/DogForm';
import { dogFormInitialState } from '../../Consts/formsInitialStates';
import { useNavigate } from 'react-router-dom';

const DogFormPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { dogState, dogDispatch } = useContext(DogContext);
  const { dogs, chosenDog } = dogState;
  const [initialStateOfDogForm, setInitialStateOfDogForm] = useState(null);
  const navigate = useNavigate();

  const changeInitialData = () => {
    let modifiedInitialState = {};
    try {
      if (chosenDog !== undefined && chosenDog !== null) {
        const requestOptions = {
          method: 'GET',
          redirect: 'follow',
          credentials: 'include',
        };

        fetch(
          `http://localhost:27020/api/dogs/${chosenDog.dogId}`,
          requestOptions,
        )
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            Object.keys(dogFormInitialState).forEach((key) => {
              modifiedInitialState[key] = result[key];
            });
            console.log(modifiedInitialState);

            setInitialStateOfDogForm(modifiedInitialState);
          })
          .catch((error) => console.log('error', error));
      }
    } catch (error) {
      setInitialStateOfDogForm(dogFormInitialState);
    }
  };

  useEffect(() => {
    changeInitialData();
  }, []);

  function submitForm(dogData) {
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
