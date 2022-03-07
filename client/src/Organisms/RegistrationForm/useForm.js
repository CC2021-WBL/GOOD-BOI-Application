import {
  genRequestOptionsPATCH,
  genRequestOptionsPOST,
} from '../../FetchData/requestOptions';
import { useEffect, useState } from 'react';

const useForm = (callback, validateData, initialState) => {
  let isNew = false;
  console.log(initialState);
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

  const submitHandler = (event) => {
    event.preventDefault();
    setErrors(validateData(formData));
    setIsSubmitting(true);

    if (isNewUser) {
      fetch('/api/users/register', genRequestOptionsPOST(formData))
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log(error));
    } else {
      console.log(initialState._id);
      fetch(`/api/users/${initialState._id}`, genRequestOptionsPATCH(formData))
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log(error));
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

export default useForm;
