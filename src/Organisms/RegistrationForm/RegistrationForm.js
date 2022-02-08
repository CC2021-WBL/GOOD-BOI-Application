import { useState } from 'react';

import RegistrationFormSignup from './RegistrationFormSignup';
import RegistrationFormSuccess from './RegistrationFormSuccess';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';

const RegistrationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <ColumnWrapper paddingLeftRight={1}>
      {!isSubmitted ? (
        <RegistrationFormSignup submitForm={submitForm} />
      ) : (
        <RegistrationFormSuccess />
      )}
    </ColumnWrapper>
  );
};

export default RegistrationForm;
