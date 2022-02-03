import ClassOrDogButton from '../../Molecules/ClassOrDogButton/ClassOrDogButton';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import MainButton from '../../Atoms/MainButton/MainButton';
import RANDOM_CONTESTS from '../../Data/Dummy-data/test-data-random-contests';

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
      <MainButton
        onClick={secondaryBtnHandler}
        secondary
        text="ZAKOŃCZ KONKURS"
      />
    </ColumnWrapper>
  );
};

export default ClassCompetitorsPage;
