import { useState } from 'react';
import RegistrationFormSignup from './RegistrationFormSignup';
import RegistrationFormSuccess from './RegistrationFormSuccess';

const RegistrationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div>
      {!isSubmitted ? (
        <RegistrationFormSignup submitForm={submitForm} />
      ) : (
        <RegistrationFormSuccess />
      )}
    </div>
  );
};

export default RegistrationForm;
