import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import DataLine from '../../Atoms/DataLine/DataLine';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import SpecialButtonsContainerStyled from '../../Molecules/SpecialButtonsContainer/SpecialButtonsContainerStyled';
import SpecialButton from '../../Atoms/SpecialButton/SpecialButton';
import participants from '../../Data/MongoDBMock/participants';
import renderParticipantData from '../../Tools/renderParticipantData';
import { useEffect, useState } from 'react';

const ParticipantData = ({ id }) => {
  let navigate = useNavigate();
  const [participantData, setParticipantData] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setParticipantData(
      participants.find((participant) => participant.participantId === id),
    );
    setIsPending(false);
  }, []);

  const handleEdit = (event) => {
    event.preventDefault();
    navigate(`/profileForm/${id}`, {
      state: {
        text: 'Formularz - edycja',
        label: `${participantData.participantName} ${participantData.participantSurname}`,
        participantId: id,
      },
    });
  };

  const handleConfirm = (event) => {
    event.preventDefault();
    navigate(`/class-choice`);
  };

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
      <ColumnWrapper paddingLeftRight={1}>
        {isPending && <p>Loading...</p>}
        {participantData &&
          Object.entries(renderParticipantData(participantData)).map(
            (dataLine, index) => <DataLine key={index} text={dataLine} />,
          )}
      </ColumnWrapper>
    </ColumnWrapper>
  );
};

ParticipantData.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ParticipantData;
