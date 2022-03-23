import propTypes from 'prop-types';
import { useState } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import RegistrationFormSignup from './RegistrationFormSignup';
import RegistrationFormSuccess from './RegistrationFormSuccess';
import { genRequestOptionsPOST } from '../../Tools/FetchData/requestOptions';

const RegistrationForm = ({ editData }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = async (formData) => {
    console.log('formData:', formData);
    if (!editData) {
      let response = await fetch(
        '/api/users/register',
        genRequestOptionsPOST(formData),
      );
      console.log(response.status);
      if (response.status !== 201) {
        alert('Ooops, rejestracja nieudana, spróbuj jeszcze raz');
      } else {
        setIsSubmitted(true);
      }
    }
  };
  console.log('isSubmitted:', isSubmitted);
  return (
    <ColumnWrapper
      paddingLeftRight={1}
      maxWidthBigScreen={35}
      className="register-form-column-wrapper user-data-wrapper grid-position"
    >
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
