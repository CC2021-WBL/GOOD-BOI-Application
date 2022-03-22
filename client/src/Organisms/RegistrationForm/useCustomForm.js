import { useEffect, useState } from 'react';

import {
  genRequestOptionsPATCH,
  genRequestOptionsPOST,
} from '../../Tools/FetchData/requestOptions';

const useCustomForm = (callback, validateData, initialState, setUserObject) => {
  let isNew = false;
  const initialStateMock = {
    participantName: '',
    participantSurname: '',
    email: '',
    password: '',
    repeatpass: '',
    phoneNumber: '',
    address: {
      country: '',
      city: '',
      street: '',
      numberOfHouse: '',
      postalCode: '',
    },
  };
  if (!initialState) {
    initialState = initialStateMock;
    isNew = true;
  }

  const [formData, setFormData] = useState(initialState);
  const [isNewUser, setIsNewUser] = useState(isNew);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleInputChange = (event) => {
    const { id, value } = event.target;

    setFormData(
      ['street', 'postalCode', 'city', 'country', 'numberOfHouse'].includes(id)
        ? {
            ...formData,
            address: {
              ...formData.address,
              [id]: value,
            },
          }
        : {
            ...formData,
            [id]: value,
          },
    );
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setErrors(validateData(formData));
    setIsSubmitting(true);

    if (isNewUser) {
      let response = await fetch(
        '/api/users/register',
        genRequestOptionsPOST(formData),
      );
      if (response.status !== 201) {
        alert('Ooops, rejestracja nieudana, spróbuj jeszcze raz');
      }
    } else {
      const response = await fetch(
        `/api/users/${initialState._id}`,
        genRequestOptionsPATCH(formData),
      );
      if (response.status === 200) {
        alert('Aktualizacja udana!');
        setUserObject(formData);
      } else {
        alert('Błąd serwera, spróbuj jeszcze raz');
      }
    }

    // error handling tries
    // .then(async (response) => {
    //   const isJson = response.headers
    //     .get('content-type')
    //     ?.includes('application/json');
    //   const data = isJson && (await response.json());

    //   //checking if there is a response error

    //   if (!response.ok) {
    //     const error = (data && data.message) || response.status;
    //     return Promise.reject(error);
    //   }
    // });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleInputChange, formData, submitHandler, errors };
};

export default useCustomForm;
