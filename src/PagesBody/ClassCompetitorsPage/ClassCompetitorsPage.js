import ClassOrDogButton from '../../Molecules/ClassOrDogButton/ClassOrDogButton';
import RANDOM_CONTESTS from '../../Data/Dummy-data/test-data-random-contests';
import { Wrapper } from '../../Atoms/MainButton/MainButtonStyled';
import MainButton from '../../Atoms/MainButton/MainButton';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';

const ClassCompetitorsPage = () => {
  function secondaryBtnHandler() {
    console.log('secondary button clicked');
  }
  return (
    <ColumnWrapper paddingLeftRight={1} paddingTop={0.25}>
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
        <MainButton
          onClick={secondaryBtnHandler}
          secondary
          text="ZAKOŃCZ KONKURS"
        />
      </Wrapper>
    </ColumnWrapper>
  );
};

export default ClassCompetitorsPage;
