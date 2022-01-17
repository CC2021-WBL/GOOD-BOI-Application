import SpecialButtonsContainer from '../../Molecules/SpecialButtonsContainer/SpecialButtonsContainer';
import ExerciseCard from '../../Molecules/ExerciseCard/ExerciseCard';

const ExercisesPage = () => {
  return (
    <>
      <SpecialButtonsContainer></SpecialButtonsContainer>

      <ExerciseCard active={true} exerciseName={'Przywołanie'} points={10} />
      <ExerciseCard
        active={false}
        exerciseName={'Chodzenie przy nodze'}
        points={5}
      />
      <ExerciseCard
        active={false}
        exerciseName={
          'Siad w grupie przez minutę, przewodnik w zasięgu wzroku całej drużyny' +
          ' devsOnTheWaves'
        }
        points={0}
      />
      <ExerciseCard active={false} exerciseName={'Przywołanie'} points={7.5} />
      <ExerciseCard
        active={false}
        exerciseName={'Wysyłanie psa po kebaba'}
        points={4}
      />
    </>
  );
};

export default ExercisesPage;
