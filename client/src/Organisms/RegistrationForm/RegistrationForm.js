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
    <ColumnWrapper
      paddingLeftRight={1}
      maxWidthBigScreen={35}
      className="register-form-column-wrapper user-data-wrapper grid-position"
    >
      <>
        {!isSubmitted ? (
          <RegistrationFormSignup submitForm={submitForm} editData={editData} />
        ) : (
          <RegistrationFormSuccess />
        )}
      </>
    </ColumnWrapper>
  );
};

RegistrationForm.propTypes = {
  editData: propTypes.bool,
};

export default RegistrationForm;
