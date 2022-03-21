import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import DogForm from '../../Organisms/DoggoForm/DogForm';
import { DogContext } from '../../Context/DogContext';
import { UserDataContext } from '../../Context/UserDataContext';
import { dogFormInitialState } from '../../Consts/formsInitialStates';
import {
  genRequestOptionsPATCH,
  genRequestOptionsPOST,
  requestOptionsGET,
} from '../../Tools/FetchData/requestOptions';
import { getDataFormatYyyyMmDD } from '../../Tools/TimeFunctions';
import {
  patchDogForm,
  postDogForm,
  postOrPatchDogForm,
} from '../../Tools/FetchData/fetchFormsFunctions';

const DogFormPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { dogState, dogDispatch } = useContext(DogContext);
  const { state } = useContext(UserDataContext);
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

  async function submitForm(dogData) {
    if (!initialStateOfDogForm._id) {
      postDogForm(state, dogData, dogs, dogDispatch);
    } else {
      patchDogForm(initialStateOfDogForm, dogData, dogs, dogDispatch);
    }

    setIsSubmitted(true);

    navigate(-1);
  }

  return (
    <ColumnWrapper>
      {!isSubmitted && initialStateOfDogForm ? (
        <DogForm submitForm={submitForm} initialState={initialStateOfDogForm} />
      ) : null}
    </ColumnWrapper>
  );
};

export default DogFormPage;
