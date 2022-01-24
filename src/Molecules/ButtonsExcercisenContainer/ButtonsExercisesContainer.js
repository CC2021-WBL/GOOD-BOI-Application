import ButtonExercises from '../../Atoms/ButtonsExercises/ButtonsExercises';
import ButtonExercisesContainerStyled from './ButtonExercisesContainerStyled';

const ButtonExercisesContainer = () => {
  return (
    <ButtonExercisesContainerStyled>
      <ButtonExercises goBackButton text={'Zapisz i wróć do listy'} />
      <ButtonExercises endingButton text={'Zakończ ocenianie'} />
    </ButtonExercisesContainerStyled>
  );
};

export default ButtonExercisesContainer;
