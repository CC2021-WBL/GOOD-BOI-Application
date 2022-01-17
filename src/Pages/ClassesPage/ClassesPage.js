import ClassOrDogButton from '../../Molecules/ClassCompetitorButton/ClassOrDogButton';
import RANDOM_CONTESTS from '../../Data/Dummy-data/test-data-random-contests';
import { Wrapper } from '../../Atoms/MainBtn/MainBtnStyled';
import MainBtn from '../../Atoms/MainBtn/MainBtn';

const ClassesPage = () => {
  function primaryBtnHandler() {
    console.log('primary button clicked');
  }
  function secondaryBtnHandler() {
    console.log('secondary button clicked');
  }
  function ternaryBtnHandler() {
    console.log('ternary button clicked');
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
        <MainBtn onClick={primaryBtnHandler} primary text="PRIMARY btn" />
        <MainBtn
          onClick={secondaryBtnHandler}
          secondary
          text="ZAKOŃCZ KONKURS"
        />
        <MainBtn onClick={ternaryBtnHandler} ternary text="TERNARY btn" />
      </Wrapper>
    </>
  );
};

export default ClassesPage;
