import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import DOGS from '../../Data/Dummy-data/test-data-dogs';
import DOG_DATA_TEMPLATE from './DogDataCONSTS';
import DataLine from './DataLine';
import { getDataFormatDdMonthYyy } from '../../Tools/TimeFunctions';
import PropTypes from 'prop-types';

const DogData = ({ id }) => {
  const randomDog = DOGS.find((dog) => (dog.id = id));

  const dogData = {};
  Object.keys(DOG_DATA_TEMPLATE).forEach(
    (prop) =>
      (dogData[DOG_DATA_TEMPLATE[prop]] = randomDog[prop] || 'brak danych'),
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
      {Object.entries(dogData).map((dataLine, index) => (
        <DataLine key={index} text={dataLine} />
      ))}
    </ColumnWrapper>
  );
};

DogData.propTypes = {
  id: PropTypes.string,
};

export default DogData;
