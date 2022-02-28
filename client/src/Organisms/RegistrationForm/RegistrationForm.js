import BackgroundDiv from '../../PagesBody/InProgressPage/BackgroundDiv';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import RegistrationFormSignup from './RegistrationFormSignup';
import RegistrationFormSuccess from './RegistrationFormSuccess';
import propTypes from 'prop-types';
import { useState } from 'react';

const RegistrationForm = ({ editData }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      {window.innerWidth > 700 && <BackgroundDiv></BackgroundDiv>}
      <ColumnWrapper paddingLeftRight={1}>
        {!isSubmitted ? (
          <RegistrationFormSignup submitForm={submitForm} editData={editData} />
        ) : (
          <RegistrationFormSuccess />
        )}
      </ColumnWrapper>
      {/* {window.innerWidth > 700 && <div style={{ height: '235px' }}></div>} */}
    </>
  );
};

RegistrationForm.propTypes = {
  editData: propTypes.bool,
};

export default RegistrationForm;
