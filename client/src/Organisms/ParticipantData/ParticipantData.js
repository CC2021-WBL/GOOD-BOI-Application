import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import DataLine from '../../Atoms/DataLine/DataLine';
import ErrorComponent from '../../PagesBody/ErrorPage/ErrorComponent';
import SpecialButton from '../../Atoms/SpecialButton/SpecialButton';
import SpecialButtonsContainerStyled from '../../Molecules/SpecialButtonsContainer/SpecialButtonsContainerStyled';
import Spinner from '../../Atoms/Spinner/Spinner';
import renderParticipantData from '../../Tools/renderParticipantData';
import { generateErrorMessage } from '../../Tools/generateErrorMessage';
import { requestOptionsGET } from '../../Tools/FetchData/requestOptions';
import { useNavigate } from 'react-router-dom';
import { DogContext } from '../../Context/DogContext';
import { ContestContext } from '../../Context/ContestContext';
import EnterCompetitionContainer from '../EnterCompetitionContainer/EnterCompetitionContainer';
import { UserDataContext } from '../../Context/UserDataContext';

const ParticipantData = ({ id }) => {
  let navigate = useNavigate();
  const [fetchErrors, setFetchErrors] = useState(null);
  const [participantData, setParticipantData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const { dogState } = useContext(DogContext);
  const { state, dispatch } = useContext(UserDataContext);
  const { contestState } = useContext(ContestContext);

  useEffect(() => {
    async function fetchParticipantData() {
      try {
        const response = await fetch(`/api/users/${id}`, requestOptionsGET);
        if (!response.ok) {
          setIsPending(false);
          throw Error(generateErrorMessage(response.status));
        } else {
          const result = await response.json();
          setParticipantData(result);
          setIsPending(false);
        }
      } catch (error) {
        setFetchErrors(error.message);
      }
    }
    fetchParticipantData();
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
    dispatch({
      type: 'UPDATE_FIELD',
      fieldName: 'userNameConfirmed',
      payload: `${participantData.participantName} ${participantData.participantSurname}`,
    });
    navigate(`/class-choice`, {
      state: { application: true },
    });
  };

  const enterCompetitionParticipantData = () => {
    return dogState.chosenDog !== {} && contestState.contestId !== null
      ? '-enter-competition'
      : '';
  };

  return (
    <>
      {fetchErrors ? (
        <ErrorComponent message={fetchErrors} />
      ) : (
        <ColumnWrapper
          className={`participant-data${enterCompetitionParticipantData()}`}
        >
          <ColumnWrapper
            className={`participant-data-container${enterCompetitionParticipantData()}`}
          >
            <SpecialButtonsContainerStyled>
              <SpecialButton
                left
                text="edytuj"
                handler={handleEdit}
                colors="blue"
              />
              <SpecialButton
                right
                text="potwierdź"
                handler={handleConfirm}
                colors="green"
              />
            </SpecialButtonsContainerStyled>
            <ColumnWrapper
              paddingLeftRight={1}
              className="participant-data-details"
            >
              {isPending && <Spinner />}
              {participantData &&
                Object.entries(renderParticipantData(participantData)).map(
                  (dataLine, index) => <DataLine key={index} text={dataLine} />,
                )}
            </ColumnWrapper>
            <ColumnWrapper
              paddingLeftRight={1}
              className="participant-data-details-bar"
            >
              Dane uczestnika
            </ColumnWrapper>
          </ColumnWrapper>
          {dogState.chosenDog !== {} && contestState.contestId !== null && (
            <EnterCompetitionContainer />
          )}
        </ColumnWrapper>
      )}
    </>
  );
};

ParticipantData.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ParticipantData;
