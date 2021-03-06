import { useEffect, useState } from 'react';

const useDogForm = (callback, validateData, initialState) => {
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
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback(formData);
    }
  }, [errors]);

  return { handleInputChange, formData, submitHandler, errors };
};

export default useDogForm;
