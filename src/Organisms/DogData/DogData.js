import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import DOGS from '../../Data/Dummy-data/test-data-dogs';
import DOG_DATA_TEMPLATE from '../../Consts/DogDataCONSTS';
import DataLine from '../../Atoms/DataLine/DataLine';
import { getDataFormatDdMonthYyy } from '../../Tools/TimeFunctions';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import SpecialButtonsContainerStyled from '../../Molecules/SpecialButtonsContainer/SpecialButtonsContainerStyled';
import SpecialButton from '../../Atoms/SpecialButton/SpecialButton';

const DogData = ({ id }) => {
  let navigate = useNavigate();
  const dog = DOGS.find((dog) => (dog.id = id));

  const handleEdit = (event) => {
    event.preventDefault();
    console.log(id);
    navigate(`/addDogForm/${id}`);
    //navigate musi przekazać dane psa (id) do formularza który wypełni sobie inputy value z bazy
    // danych
  };
  const handleConfirm = (event) => {
    event.preventDefault();
    console.log(dog.idOfOwner);
    navigate(`/participantData/${dog.idOfOwner}`);
    //navigate musi przekazać id właściela psa, żeby pokazać nam kolejny ekran z wypełnionymi
    // danymi właściciela
  };

  const dogData = {};
  Object.keys(DOG_DATA_TEMPLATE).forEach(
    (prop) => (dogData[DOG_DATA_TEMPLATE[prop]] = dog[prop] || 'brak danych'),
  );

  //Data convert to string
  dogData['Data urodzenia'] = `${getDataFormatDdMonthYyy(
    dogData['Data urodzenia'],
  )}`;
  //Sex convert to string
  dogData['Płeć'] === 'male'
    ? (dogData['Płeć'] = 'Pies')
    : (dogData['Płeć'] = 'Suka');

  return (
    <ColumnWrapper>
      <SpecialButtonsContainerStyled>
        <SpecialButton left text="edytuj" handler={handleEdit} theme="blue" />
        <SpecialButton
          right
          text="potwierdź"
          handler={handleConfirm}
          theme="green"
        />
      </SpecialButtonsContainerStyled>
      {/*//ten div jest do wywalenia - nie mamy jeszcze mądrego wrappera do paddingowania*/}
      <div style={{ padding: '0 1rem' }}>
        <ColumnWrapper style={{ padding: '0 1rem' }}>
          {Object.entries(dogData).map((dataLine, index) => (
            <DataLine key={index} text={dataLine} />
          ))}
        </ColumnWrapper>
      </div>
    </ColumnWrapper>
  );
};

DogData.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DogData;
