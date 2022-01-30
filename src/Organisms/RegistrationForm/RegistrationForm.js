import { useState } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import RegistrationFormSignup from './RegistrationFormSignup';
import RegistrationFormSuccess from './RegistrationFormSuccess';

// eslint-disable-next-line react/prop-types
const RegistrationForm = ({ editData }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <ColumnWrapper paddingLeftRight={1}>
      {!isSubmitted ? (
        <RegistrationFormSignup submitForm={submitForm} editData={editData} />
      ) : (
        <RegistrationFormSuccess />
      )}
    </ColumnWrapper>
  );
};

export default RegistrationForm;
