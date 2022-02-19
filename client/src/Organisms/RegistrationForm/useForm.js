import { useEffect, useState } from 'react';

const useForm = (callback, validateData, initialState) => {
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
  }

  const [formData, setFormData] = useState(initialState);
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
            address: {
              ...formData.address,
              [id]: value,
            },
          },
    );
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setErrors(validateData(formData));
    setIsSubmitting(true);

    // Sending data to future server
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      // checking if response is coming back
      .then((res) => console.log(res));

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
