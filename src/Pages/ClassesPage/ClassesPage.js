import ClassOrDogButton from '../../Molecules/ClassCompetitorButton/ClassOrDogButton';
import RANDOM_CONTEST from '../../Data/Dummy-data/test-data-random-contest';

const ClassesPage = () => {
  return (
    <>
      {RANDOM_CONTEST.obedienceClasses.map((classObject) => {
        const { obedienceClass, dogs, isCompleted } = classObject;
        const { id, name } = obedienceClass;

        return (
          <ClassOrDogButton
            key={id}
            classInfo={{
              name,
              dogsAmount: dogs.length,
              isCompleted,
            }}
          />
        );
      })}
    </>
  );
};

export default ClassesPage;
