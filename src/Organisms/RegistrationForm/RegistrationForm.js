import propTypes from 'prop-types';
import { useState } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import RegistrationFormSignup from './RegistrationFormSignup';
import RegistrationFormSuccess from './RegistrationFormSuccess';

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

RegistrationForm.propTypes = {
  editData: propTypes.bool,
};

export default RegistrationForm;
