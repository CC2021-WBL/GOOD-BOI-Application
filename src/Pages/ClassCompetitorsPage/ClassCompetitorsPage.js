import ClassOrDogButton from '../../Molecules/ClassCompetitorButton/ClassOrDogButton';
import RANDOM_CONTESTS from '../../Data/Dummy-data/test-data-random-contests';

const ClassCompetitorsPage = () => {
  return (
    <>
      {RANDOM_CONTESTS[0].obedienceClasses[0].dogs.map((dog, index) => {
        const { id, dogName, exercisesCompleted, exercisesAmount } = dog;
        return (
          <ClassOrDogButton
            key={id}
            dogInfo={{
              index,
              dogName,
              exercisesCompleted,
              exercisesAmount,
            }}
          />
        );
      })}
    </>
  );
};

export default ClassCompetitorsPage;
