import ClassOrDogButton from '../../Molecules/ClassCompetitorButton/ClassOrDogButton';
import RANDOM_CONTESTS from '../../Data/Dummy-data/test-data-random-contests';

const ClassesPage = () => {
  return (
    <>
      {RANDOM_CONTESTS[0].obedienceClasses.map((classObject) => {
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
