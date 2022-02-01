import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import DOGS from '../../Data/Dummy-data/test-data-dogs';
import DOG_DATA_TEMPLATE from '../../Consts/DogDataCONSTS';
import DataLine from '../../Atoms/DataLine/DataLine';
import { getDataFormatDdMonthYyy } from '../../Tools/TimeFunctions';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import SpecialButtonsContainerStyled from '../../Molecules/SpecialButtonsContainer/SpecialButtonsContainerStyled';
import SpecialButton from '../../Atoms/SpecialButton/SpecialButton';
import { doggoSex } from '../../Consts/formsDataToChose';

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
    const idOfOwnerFromContext = '@TODO in the future';
    navigate(`/participantData/${idOfOwnerFromContext}`);
    //navigate musi przekazać id właściela psa, żeby pokazać nam kolejny ekran z wypełnionymi
    // danymi właściciela
  };

  const dogData = {};
  Object.keys(DOG_DATA_TEMPLATE).forEach(
    (prop) => (dogData[DOG_DATA_TEMPLATE[prop]] = dog[prop] || 'brak danych'),
  );

  const { dateOfBirth, sex } = DOG_DATA_TEMPLATE;

  //Date of birth convert to string
  dogData[dateOfBirth] = `${getDataFormatDdMonthYyy(dogData[dateOfBirth])}`;
  //Sex convert to string
  dogData[sex] = doggoSex[dogData[sex]];

  return (
    <ColumnWrapper paddingLeftRight={1}>
      <SpecialButtonsContainerStyled>
        <SpecialButton left text="edytuj" handler={handleEdit} theme="blue" />
        <SpecialButton
          right
          text="potwierdź"
          handler={handleConfirm}
          theme="green"
        />
      </SpecialButtonsContainerStyled>
      <ColumnWrapper>
        {Object.entries(dogData).map((dataLine, index) => (
          <DataLine key={index} text={dataLine} />
        ))}
      </ColumnWrapper>
    </ColumnWrapper>
  );
};

DogData.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DogData;
