import { useState } from 'react';

const useForm = (validateData) => {
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
  // const [setIsSubmitting] = useState(false);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };
  //   const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    setErrors(validateData(formData));
    // setIsSubmitting(true);
    const data = { ...formData };

    console.log(data);
  };

  return { handleInputChange, formData, submitHandler, errors };
};

export default useForm;
