import ClassOrDogButton from '../../Molecules/ClassCompetitorButton/ClassOrDogButton';
import RANDOM_CONTEST from '../../Data/Dummy-data/test-data-random-contest';

const ClassCompetitorsPage = () => {
  return (
    <>
      {RANDOM_CONTEST.obedienceClasses[0].dogs.map((dog, index) => {
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
