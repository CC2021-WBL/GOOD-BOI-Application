import DogData from './DogData';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import SpecialButtonsContainerStyled from '../../Molecules/SpecialButtonsContainer/SpecialButtonsContainerStyled';
import SpecialButton from '../../Atoms/SpecialButton/SpecialButton';
const randomDogID = 'e8085155-6b82-41f4-a5e5-b4745c332ce2';

const DogDataPage = () => {
  const handleEdit = () => {
    console.log('handle edit');
  };
  const handleConfirm = () => {
    console.log('handle confirm');
  };

  return (
    <ColumnWrapper>
      <SpecialButtonsContainerStyled>
        <SpecialButton edit text="edytuj" handler={handleEdit} />
        <SpecialButton text="potwierdź" confirm handler={handleConfirm} />
      </SpecialButtonsContainerStyled>
      <ColumnWrapper>
        <DogData id={randomDogID} />
      </ColumnWrapper>
    </ColumnWrapper>
  );
};

export default DogDataPage;
