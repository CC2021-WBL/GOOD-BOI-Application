import SpecialButtonsContainer from '../../Molecules/SpecialButtonsContainer/SpecialButtonsContainer';
import ExerciseCard from '../../Molecules/ExerciseCard/ExerciseCard';
import ExerciseCardsContainer from '../../Organisms/ExerciseCardsContainter/ExerciseCardsContainer';
import DOGS from '../../Data/Dummy-data/test-data-dogs';
import CLASSES from '../../Data/Dummy-data/test-data-classes';

const ExercisesPage = () => {
  const ourTestDog = DOGS[0];
  const arrayOfExerciesIds = Object.keys(ourTestDog.exercises);
  const arrayOfExercisesNames = arrayOfExerciesIds.map((e) => {
    return CLASSES[0].exercises.find((x) => x.id === e).name;
  });

  return (
    <>
      <SpecialButtonsContainer></SpecialButtonsContainer>
      <ExerciseCardsContainer>
        {arrayOfExercisesNames.map((exercise) => {
          return (
            <ExerciseCard
              key={'ok'}
              active={true}
              exerciseName={exercise}
              points={99}
            />
          );
        })}
      </ExerciseCardsContainer>
      <ExerciseCardsContainer>
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
        <ExerciseCard
          active={false}
          exerciseName={'Przywołanie'}
          points={7.5}
        />
        <ExerciseCard
          active={false}
          exerciseName={'Wysyłanie psa po kebaba'}
          points={4}
        />

        <ExerciseCard
          active={false}
          exerciseName={'Wysyłanie psa po kebaba'}
          points={4}
        />
      </ExerciseCardsContainer>
    </>
  );
};

export default ExercisesPage;
