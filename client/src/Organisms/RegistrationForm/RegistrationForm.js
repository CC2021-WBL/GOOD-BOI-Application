import propTypes from 'prop-types';
import { useState } from 'react';

import BackgroundDiv from './../../Atoms/BackgroundDiv/BackgroundDiv';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import GridWrapper from './../../Templates/Layout/GridWrapper';
import RegistrationFormSignup from './RegistrationFormSignup';
import RegistrationFormSuccess from './RegistrationFormSuccess';

const RegistrationForm = ({ editData }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <GridWrapper tablet="2 / 2 / -2 / -1" desktop="3 / 3 / -2 / -1">
        <BackgroundDiv />
      </GridWrapper>
      <ColumnWrapper paddingLeftRight={1}>
        {!isSubmitted ? (
          <RegistrationFormSignup submitForm={submitForm} editData={editData} />
        ) : (
          <RegistrationFormSuccess />
        )}
      </ColumnWrapper>
    </>
  );
};

RegistrationForm.propTypes = {
  editData: propTypes.bool,
};

export default RegistrationForm;
