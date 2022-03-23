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
    

  useEffect(() => {
    async function submitData() {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      if (isNew) {
        callback(formData);
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
      };
    }
  }
    submitData()
  }, [errors]);

  return { handleInputChange, formData, submitHandler, errors };
};


export default useCustomForm;
