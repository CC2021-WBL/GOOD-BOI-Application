import styled from 'styled-components';
import { Formik } from 'formik';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ContestFormHeader from './ContestFormHeader';
import MainButton from '../../Atoms/MainButton/MainButton';

// import ContestFormHeader from './ContestFormHeader';

const Input = styled.input`
  height: 2rem;
  width: 40%;
  padding: 0 1rem;
  margin: 0.2rem auto;
`;

const FormikTestForm = () => {
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
        {/* <form> */}
          <label style={{ paddingRight: '10rem', fontWeight: 'bold' }}>
            input1{' '}
            <Input
              placeholder="put input here"
              style={{ height: '2rem', padding: '.5rem' }}
            ></Input>
          </label>
          <label style={{ paddingRight: '10rem', fontWeight: 'bold' }}>
            input2{' '}
            <Input
              placeholder="put input here"
              style={{ height: '2rem', padding: '.5rem' }}
            ></Input>
          </label>
          <label style={{ paddingRight: '10rem', fontWeight: 'bold' }}>
            input3{' '}
            <Input
              placeholder="put input here"
              style={{ height: '2rem', padding: '.5rem' }}
            ></Input>
          </label>
        {/* </form>  */}
        <MainButton text="zarejestruj sie" />
      </Formik>
    </ColumnWrapper>
  );
};

export default FormikTestForm;
