import styled from 'styled-components';
import { Formik } from 'formik';
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ContestFormHeader from './ContestFormHeader';
import FormWrapper from './../../Atoms/FormWrapper/FormWrapper';
import MainButton from '../../Atoms/MainButton/MainButton';
import { UserDataContext } from '../../Context/UserDataContext';

const Input = styled.input`
  height: 2rem;
  width: 40%;
  padding: 0 1rem;
  margin: 0.2rem auto;
`;

const FormikTestForm = () => {
  const [data, setData] = useState('');
  const [amountOfJudges, setAmountOfJudges] = useState(0);
  const [judgesArray, setJudgesArray] = useState([]);
  const [chosenClasses, setChosenClasses] = useState([]);
  const [redBorder, setRedBorder] = useState('');
  const params = useParams();
  const { state } = useContext(UserDataContext);

  let managerId = state.userId;
  if (!managerId) {
    managerId = params.userId;
  }
  return (
    <ColumnWrapper
      paddingLeftRight={3}
      paddingTop={1}
      paddingBottom={1}
      maxWidthBigScreen={35}
      className="form-wrapper grid-position"
    >
      <ContestFormHeader />
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <FormWrapper onSubmit={console.log('submit')}>
            <label style={{ paddingRight: '10rem', fontWeight: 'bold' }}>
              title{' '}
              <Input
                placeholder="put input here"
                style={{ height: '2rem', padding: '.5rem' }}
              ></Input>
            </label>
            <label style={{ paddingRight: '10rem', fontWeight: 'bold' }}>
              body{' '}
              <Input
                placeholder="put input here"
                style={{ height: '2rem', padding: '.5rem' }}
              ></Input>
            </label>
            <label style={{ paddingRight: '1rem', fontWeight: 'bold' }}>
              rating{' '}
              <Input
                placeholder="put input here"
                style={{ height: '2rem', padding: '.5rem' }}
              ></Input>
            </label>
            <MainButton text="zarejestruj sie" />
          </FormWrapper>
        )}
      </Formik>
    </ColumnWrapper>
  );
};

export default FormikTestForm;
