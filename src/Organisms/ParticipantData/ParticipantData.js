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
    navigate(`/addDogForm/${id}`);
    //navigate musi przekazać dane psa (id) do formularza który wypełni sobie inputy value z bazy
    // danych
  };
  const handleConfirm = (event) => {
    event.preventDefault();
    console.log(participant.idOfOwner);
    navigate(`/participantData/${participant.idOfOwner}`);
    //navigate musi przekazać id właściela psa, żeby pokazać nam kolejny ekran z wypełnionymi
    // danymi właściciela
  };

  const participantData = {};
  Object.keys(PARTICIPANT_DATA_TEMPLATE).forEach(
    (prop) =>
      (participantData[PARTICIPANT_DATA_TEMPLATE[prop]] =
        participant[prop] || 'brak danych'),
  );

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
