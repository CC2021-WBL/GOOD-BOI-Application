import { useEffect, useState } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import DataLine from '../../Atoms/DataLine/DataLine';
import PropTypes from 'prop-types';
import SpecialButton from '../../Atoms/SpecialButton/SpecialButton';
import SpecialButtonsContainerStyled from '../../Molecules/SpecialButtonsContainer/SpecialButtonsContainerStyled';
import renderParticipantData from '../../Tools/renderParticipantData';
import { requestOptionsGET } from '../../Tools/FetchData/requestOptions';
import { useNavigate } from 'react-router-dom';

const ParticipantData = ({ id }) => {
  let navigate = useNavigate();
  const [participantData, setParticipantData] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    try {
      async function fetchParticipantData() {
        const response = await fetch(`/api/users/${id}`, requestOptionsGET);
        const result = await response.json();
        setParticipantData(result);
        setIsPending(false);
      }

      fetchParticipantData();
    } catch (error) {
      console.log(error);
    }
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
    navigate(`/class-choice`, {
      state: { application: true },
    });
  };

  return (
    <ColumnWrapper>
      <SpecialButtonsContainerStyled>
        <SpecialButton left text="edytuj" handler={handleEdit} colors="blue" />
        <SpecialButton
          right
          text="potwierdź"
          handler={handleConfirm}
          colors="green"
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
