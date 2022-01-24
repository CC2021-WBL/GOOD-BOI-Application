import ButtonExercisesContainer from '../../Molecules/ButtonsExcercisenContainer/ButtonsExercisesContainer';
import DOGS from '../../Data/Dummy-data/test-data-dogs';
import ExerciseCardsContainer from '../../Organisms/ExerciseCardsContainter/ExerciseCardsContainer';
import SpecialButtonsContainer from '../../Molecules/SpecialButtonsContainer/SpecialButtonsContainer';

const ExercisesPage = () => {
  // OUR ROUTE: http://localhost:3000/contests/1/classes/1/Woof
  // so when we click our page we must GET data from database about our dog performance
  // in the future we will use more IDs than other properties

  const ourTestDogName = 'Woof';
  const ourTestDog = DOGS.find((dog) => dog.dogName === ourTestDogName);
  const ourTestContestName = 'XII Zawody im. Pana Starosty';
  const ourTestPerformanceObject = ourTestDog.performances.find(
    (performance) => performance.contestName == ourTestContestName,
  );

  return (
    <>
      <SpecialButtonsContainer></SpecialButtonsContainer>
      <ButtonExercisesContainer></ButtonExercisesContainer>
      <ExerciseCardsContainer
        performanceObject={ourTestPerformanceObject}
      ></ExerciseCardsContainer>
    </>
  );
};

export default ExercisesPage;
