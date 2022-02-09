import ButtonExercises from '../../Atoms/ButtonsExercises/ButtonsExercises';
import ButtonExercisesContainerStyled from './ButtonExercisesContainerStyled';

const ButtonExercisesContainer = () => {
  return (
    <ButtonExercisesContainerStyled>
      <ButtonExercises secondary text={'Zapisz i wróć do listy'} />
      <ButtonExercises primary text={'Zakończ ocenianie'} />
    </ButtonExercisesContainerStyled>
  );
};

export default ButtonExercisesContainer;
