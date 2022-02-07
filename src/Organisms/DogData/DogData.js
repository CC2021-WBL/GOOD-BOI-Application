import { useEffect, useState } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import DOG_DATA_TEMPLATE from '../../Consts/DogDataCONSTS';
import DataLine from '../../Atoms/DataLine/DataLine';
import PropTypes from 'prop-types';
import SpecialButton from '../../Atoms/SpecialButton/SpecialButton';
import SpecialButtonsContainerStyled from '../../Molecules/SpecialButtonsContainer/SpecialButtonsContainerStyled';
import doggos from '../../Data/MongoDBMock/doggos';
import { getDataFormatDdMonthYyy } from '../../Tools/TimeFunctions';
import { useNavigate } from 'react-router-dom';

const DogData = ({ id }) => {
  let navigate = useNavigate();
  const [dogData, setDogData] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    // @TODO fetching data from database in the future here
    setDogData(doggos.find((dog) => dog.dogId === id));
    setIsPending(false);
  }, []);

  const dogDataRender = {};

  if (dogData) {
    Object.keys(DOG_DATA_TEMPLATE).forEach(
      (property) =>
        (dogDataRender[DOG_DATA_TEMPLATE[property]] =
          dogData[property] || 'brak danych'),
    );
    dogDataRender['Data urodzenia'] = `${getDataFormatDdMonthYyy(
      dogDataRender['Data urodzenia'],
    )}`;
  }

  const handleEdit = (event) => {
    event.preventDefault();
    console.log(id);
    navigate(`/add-dog-form/${id}`);
    //navigate musi przekazać dane psa (id) do formularza który wypełni sobie inputy value z bazy
    // danych
  };
  const handleConfirm = (event) => {
    event.preventDefault();
    const idOfOwnerFromContext = '@TODO in the future';
    navigate(`/participant-data/${idOfOwnerFromContext}`);
    //navigate musi przekazać id właściela psa, żeby pokazać nam kolejny ekran z wypełnionymi
    // danymi właściciela
  };

  return (
    <ColumnWrapper paddingLeftRight={1}>
      <SpecialButtonsContainerStyled>
        <SpecialButton left text="edytuj" handler={handleEdit} colors="blue" />
        <SpecialButton
          right
          text="potwierdź"
          handler={handleConfirm}
          colors="green"
        />
      </SpecialButtonsContainerStyled>
      <ColumnWrapper>
        {isPending && <p>Loading...</p>}
        {dogData &&
          Object.entries(dogDataRender).map((dataLine, index) => (
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
