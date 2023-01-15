/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import useRegisterUser from '../../Hooks/QueryHooks/user/useRegisterUser';
import useUpdateUser from '../../Hooks/QueryHooks/user/useUpdateUser';

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

const useCustomForm = (
  successfulSubmitCallback,
  validateData,
  initialState,
  setUserObject,
) => {
  const { mutateAsync: useCreateUser } = useRegisterUser();
  const { mutateAsync: updateUser } = useUpdateUser();
  let isNewUser = false;

  if (!initialState) {
    initialState = initialStateMock;
    isNewUser = true;
  }

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
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
    const errors = validateData(formData);
    setErrors(errors);
    if (isNewUser) {
      if (Object.keys(errors).length !== 0) {
        return;
      }

      const response = await useCreateUser(formData);
      if (response.status === 201) {
        successfulSubmitCallback();
      } else {
        alert('Ooops, rejestracja nieudana, spróbuj jeszcze raz');
      }
    } else {
      const res = await updateUser({
        userId: initialState._id,
        userData: formData,
      });
      if (res.status === 200) {
        alert('Aktualizacja udana!');
        setUserObject(formData);
      } else {
        alert('Błąd serwera, spróbuj jeszcze raz');
      }
    }
  };

  return { handleInputChange, formData, submitHandler, errors };
};

export default useCustomForm;
