import ClassOrDogButton from '../../Molecules/ClassOrDogButton/ClassOrDogButton';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import MainButton from '../../Atoms/MainButton/MainButton';
import participants from '../../Data/MongoDBMock/participants';
import { useNavigate } from 'react-router-dom';

const UserDogPage = () => {
  const navigate = useNavigate();

  return (
    <ColumnWrapper paddingLeftRight={1} paddingTop={0.5}>
      {participants[0].dogs.map((dog, index) => {
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
      <MainButton
        secondary
        text="DODAJ PSIAKA"
        onClick={() => navigate('/addDogForm')}
      />
    </ColumnWrapper>
  );
};

export default UserDogPage;
