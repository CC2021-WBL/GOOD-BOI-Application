import ClassOrDogButton from '../../Molecules/ClassOrDogButton/ClassOrDogButton';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import MainButton from '../../Atoms/MainButton/MainButton';
import RANDOM_CONTESTS from '../../Data/Dummy-data/test-data-random-contests';

const UserDogPage = () => {
  return (
    <ColumnWrapper paddingLeftRight={1} paddingTop={0.5}>
      {RANDOM_CONTESTS[0].obedienceClasses[0].dogs.map((dog, index) => {
        const { id, dogName } = dog;
        return (
          <ClassOrDogButton
            key={id}
            dogInfo={{
              index,
              dogName,
            }}
          />
        );
      })}
      <MainButton secondary text="DODAJ PSIAKA" />
    </ColumnWrapper>
  );
};

export default UserDogPage;
