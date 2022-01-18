import ClassOrDogButton from '../../Molecules/ClassOrDogButton/ClassOrDogButton';
import RANDOM_CONTESTS from '../../Data/Dummy-data/test-data-random-contests';
import { Wrapper } from '../../Atoms/MainButton/MainButtonStyled';
import MainButton from '../../Atoms/MainButton/MainButton';
import GreyLabel from '../../Atoms/GreyLabel/GreyLabel';

const ClassesPage = () => {
  function secondaryBtnHandler() {
    console.log('secondary button clicked');
  }

  return (
    <>
      <GreyLabel text="TEST XII zawody im. Pana Starosty"></GreyLabel>
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
