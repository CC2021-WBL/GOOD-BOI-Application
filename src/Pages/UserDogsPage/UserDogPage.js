import ClassOrDogButton from '../../Molecules/ClassOrDogButton/ClassOrDogButton';
import MainButton from '../../Atoms/MainButton/MainButton';
import RANDOM_CONTESTS from '../../Data/Dummy-data/test-data-random-contests';

const UserDogPage = () => {
  return (
    <div>
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
      <MainButton secondary text="DODAJ PSA" />
    </div>
  );
};

export default UserDogPage;
