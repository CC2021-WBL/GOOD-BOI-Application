import { useForm } from 'react-hook-form';
import FormWrapper from './../../Atoms/FormWrapper/FormWrapper';
// import InputField from '../../Molecules/InputField/InputField';

const DoggoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  return (
    <>
      <h1>Zarejestruj psa</h1>
      <FormWrapper
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input
          {...register('pedigreeName', { required: true })}
          placeholder="Imię rodowodowe"
        />
        <input
          {...register('kennelName', {
            required: true,
          })}
          placeholder="Przydomek"
        />
        <input
          {...register('breed', {
            required: true,
            minLength: { value: 3, message: 'Minimalnie 4 znaki' },
          })}
          placeholder="Pełna rasa psa / suki"
        />
        <input {...register('sex', { required: true })} placeholder="płeć" />
        <input
          {...register('dateOfBirth', { required: true })}
          placeholder="Data urodzenia"
        />
        <input type="submit" />
      </FormWrapper>
    </>
  );
};

export default DoggoForm;
