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
    // setFormData({
    //   ...formData,
    //   [event.target.id]: event.target.value,
    // });
    // const data = { ...formData };

    // //test, after submit, entered user data
    // console.log(data);
    // navigate('/login');
  };

  return { handleInputChange, formData, submitHandler, errors };
};

export default useForm;
