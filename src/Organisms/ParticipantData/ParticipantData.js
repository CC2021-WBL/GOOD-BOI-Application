import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import DataLine from '../../Atoms/DataLine/DataLine';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import SpecialButtonsContainerStyled from '../../Molecules/SpecialButtonsContainer/SpecialButtonsContainerStyled';
import SpecialButton from '../../Atoms/SpecialButton/SpecialButton';
import PARTICIPANTS from '../../Data/Dummy-data/test-data-participants';
import PARTICIPANT_DATA_TEMPLATE from '../../Consts/ParticipantDataCONSTS';
const ParticipantData = ({ id }) => {
  let navigate = useNavigate();
  const participant = PARTICIPANTS.find((participant) => (participant.id = id));

  const handleEdit = (event) => {
    event.preventDefault();
    console.log(id);
    navigate(`/profileForm/${id}`);
    //navigate musi przekazać dane participanta(id) do formularza który wypełni sobie inputy
    //value z bazy danych
  };

  const handleConfirm = (event) => {
    event.preventDefault();
    navigate(`/classChoice`);
  };

  const participantData = {};
  Object.keys(PARTICIPANT_DATA_TEMPLATE).forEach(
    (property) =>
      (participantData[PARTICIPANT_DATA_TEMPLATE[property]] =
        participant[property] || 'brak danych'),
  );

  const { address, street, numberOfHouse, city, postalCode } =
    PARTICIPANT_DATA_TEMPLATE;

  // Add street and number of house in one property 'Adres'
  participantData[
    address
  ] = `${participantData[street]} ${participantData[numberOfHouse]}`;

  // Add postal code and city in one property 'City'
  participantData[
    city
  ] = `${participantData[postalCode]} ${participantData[city]}`;

  delete participantData[street];
  delete participantData[numberOfHouse];
  delete participantData[postalCode];

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
        {Object.entries(participantData).map((dataLine, index) => (
          <DataLine key={index} text={dataLine} />
        ))}
      </ColumnWrapper>
    </ColumnWrapper>
  );
};

ParticipantData.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ParticipantData;
