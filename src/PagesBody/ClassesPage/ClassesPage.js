import ClassOrDogButton from '../../Molecules/ClassOrDogButton/ClassOrDogButton';
import RANDOM_CONTESTS from '../../Data/Dummy-data/test-data-random-contests';
import MainButton from '../../Atoms/MainButton/MainButton';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';

const ClassesPage = () => {
  function secondaryBtnHandler() {
    console.log('secondary button clicked');
  }

  return (
    <ColumnWrapper paddingLeftRight={1} paddingTop={0.25}>
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
      <MainButton
        onClick={secondaryBtnHandler}
        secondary
        text="ZAKOŃCZ KLASĘ"
      />
    </ColumnWrapper>
  );
};

export default ClassesPage;
