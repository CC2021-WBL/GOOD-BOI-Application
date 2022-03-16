import {
  genRequestOptionsPATCH,
  genRequestOptionsPOST,
} from '../Tools/FetchData/requestOptions';
import { useContext, useEffect, useState } from 'react';

import { UserDataContext } from '../Context/UserDataContext';

const useDogForm = (callback, validateData, initialState) => {
  const { state } = useContext(UserDataContext);
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setErrors(validateData(formData));
    setIsSubmitting(true);

    if (!initialState._id) {
      delete formData._id;
      try {
        const res = await fetch(
          `/api/dogs/register/${state.userId}`,
          genRequestOptionsPOST(formData),
        );
        if (!res.ok) {
          alert('Dodanie psa nieudane, spróbuj jeszcze raz');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const res = await fetch(
          `/api/dogs/${initialState._id}`,
          genRequestOptionsPATCH(formData),
        );
        if (!res.ok) {
          alert('Aktualizacja danych nieudana, spróbuj jeszcze raz');
          console.log(res.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

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
  // navigate(-1);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback(formData);
    }
  }, [errors]);

  return { handleInputChange, formData, submitHandler, errors };
};

export default useDogForm;
