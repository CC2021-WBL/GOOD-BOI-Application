import ClassOrDogButton from '../../Molecules/ClassCompetitorButton/ClassOrDogButton';
import RANDOM_CONTESTS from '../../Data/Dummy-data/test-data-random-contests';
import { Wrapper } from '../../Atoms/MainBtn/MainBtnStyled';
import MainBtn from '../../Atoms/MainBtn/MainBtn';

const ClassCompetitorsPage = () => {
  function secondaryBtnHandler() {
    console.log('secondary button clicked');
  }
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
      <Wrapper>
        <MainBtn
          onClick={secondaryBtnHandler}
          secondary
          text="ZAKOŃCZ KONKURS"
        />
      </Wrapper>
    </>
  );
};

export default ClassCompetitorsPage;
