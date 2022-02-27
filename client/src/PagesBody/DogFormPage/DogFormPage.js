import { useContext, useEffect, useState } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import { DogContext } from '../../Context/DogContext';
import DogForm from '../../Organisms/DoggoForm/DogForm';
import { dogFormInitialState } from '../../Consts/formsInitialStates';
import doggos from '../../Data/MongoDBMock/doggos';
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
        const dogFromDB = doggos.find((dog) => dog.dogId === chosenDog.dogId);
        Object.keys(dogFormInitialState).forEach((key) => {
          modifiedInitialState[key] = dogFromDB[key];
        });
        console.log(modifiedInitialState);

        setInitialStateOfDogForm(modifiedInitialState);
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
    <ColumnWrapper
      paddingLeftRight={1}
      desktop="grid-area: 2 / 4 / 8 / 10"
      mobile="grid-area: 1 / 1 / 2 / 2"
    >
      {!isSubmitted && initialStateOfDogForm ? (
        <DogForm submitForm={submitForm} initialState={initialStateOfDogForm} />
      ) : null}
    </ColumnWrapper>
  );
};

export default DogFormPage;
