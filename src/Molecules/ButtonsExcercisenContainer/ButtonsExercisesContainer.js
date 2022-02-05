import ButtonExercises from '../../Atoms/ButtonsExercises/ButtonsExercises';
import ButtonExercisesContainerStyled from './ButtonExercisesContainerStyled';

// eslint-disable-next-line react/prop-types
const ButtonExercisesContainer = ({ dogPerformance }) => {
  return (
    <ButtonExercisesContainerStyled>
      <ButtonExercises goBack text={'Zapisz i wróć do listy'} />
      <ButtonExercises
        dogPerformance={dogPerformance}
        endingButton
        text={'Zakończ ocenianie'}
      />
    </ButtonExercisesContainerStyled>
  );
};

export default ButtonExercisesContainer;
