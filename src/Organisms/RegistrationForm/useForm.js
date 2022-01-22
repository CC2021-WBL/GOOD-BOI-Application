import { useEffect, useState } from 'react';

const useForm = (callback, validateData) => {
  const initialState = {
    firstname: '',
    surname: '',
    email: '',
    password: '',
    repeatpass: '',
    street: '',
    zipcode: '',
    city: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSumbmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  //   const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    setErrors(validateData(formData));
    setIsSubmitting(true);
    const data = { ...formData };

    console.log(data);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSumbmitting) {
      callback();
    }
  }, [errors]);

  return { handleInputChange, formData, submitHandler, errors };
};

export default useForm;
