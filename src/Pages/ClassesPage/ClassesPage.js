import ClassOrDogButton from '../../Molecules/ClassCompetitorButton/ClassOrDogButton';
import RANDOM_CONTESTS from '../../Data/Dummy-data/test-data-random-contests';
import { Wrapper } from '../../Atoms/MainButton/MainButtonStyled';
import MainButton from '../../Atoms/MainButton/MainButton';

const ClassesPage = () => {
  function secondaryBtnHandler() {
    console.log('secondary button clicked');
  }

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
      <Wrapper>
        <MainButton
          onClick={secondaryBtnHandler}
          secondary
          text="ZAKOŃCZ KLASĘ"
        />
      </Wrapper>
    </>
  );
};

export default ClassesPage;
