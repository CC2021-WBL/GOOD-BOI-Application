import ButtonExercises from '../../Atoms/ButtonsExercises/ButtonsExercises';
import ButtonExercisesContainerStyled from './ButtonExercisesContainerStyled';

// eslint-disable-next-line react/prop-types
const ButtonExercisesContainer = () => {
  return (
    <ButtonExercisesContainerStyled>
      <ButtonExercises
        secondary
        text={'baton z kontenera Zapisz i wróć do listy'}
      />
      <ButtonExercises primary text={'baton z kontenera Zakończ ocenianie'} />
    </ButtonExercisesContainerStyled>
  );
};

export default ButtonExercisesContainer;
