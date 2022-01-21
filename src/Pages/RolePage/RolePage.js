import CardWrapper from '../../Atoms/CardWrapper/CardWrapper';
import FormWrapper from '../../Atoms/FormWrapper/FormWrapper';
import MainButton from '../../Atoms/MainButton/MainButton';

const RolePage = () => {
  return (
    <CardWrapper>
      <FormWrapper>
        <h1> Choose Your Role!</h1>
        <MainButton text="Obsługa" primary />
      </FormWrapper>
    </CardWrapper>
  );
};

export default RolePage;
