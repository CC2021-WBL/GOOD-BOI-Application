import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import DataLine from '../../Atoms/DataLine/DataLine';
import SpecialButton from '../../Atoms/SpecialButton/SpecialButton';
import SpecialButtonsContainerStyled from '../../Molecules/SpecialButtonsContainer/SpecialButtonsContainerStyled';
import Spinner from '../../Atoms/Spinner/Spinner';
import renderDogData from '../../Tools/renderDogData';
import { ContestContext } from '../../Context/ContestContext';
import { DogContext } from '../../Context/DogContext';
import { UserDataContext } from '../../Context/UserDataContext';
import { requestOptionsGET } from '../../Tools/FetchData/requestOptions';
import enterCompetitionAddClass from '../EnterCompetitionContainer/enterCompetitionAddClass';
import EnterCompetitionContainer from '../EnterCompetitionContainer/EnterCompetitionContainer';

const DogData = ({ id }) => {
  let navigate = useNavigate();
  const [dogData, setDogData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const { state } = useContext(UserDataContext);
  const { dogDispatch, dogState } = useContext(DogContext);
  const { contestState } = useContext(ContestContext);

  console.log(state, dogState, contestState);

  useEffect(() => {
    async function fetchDogData() {
      try {
        let response = await fetch(`/api/dogs/${id}`, requestOptionsGET);
        if (response.ok) {
          response = await response.json();
          setDogData(response);
          setIsPending(false);
        } else {
          alert('Ooops, problem z serwerem, nie udało się załadować danych');
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchDogData();
  }, []);

  const handleEdit = (event) => {
    event.preventDefault();
    navigate(`/add-dog-form/`, {
      state: {
        text: 'Formularz - edycja',
        label: `${dogData.dogName}`,
      },
    });
  };

  const handleConfirm = (event) => {
    event.preventDefault();
    dogState.chosenDog &&
      contestState.contestId &&
      navigate(`/participant-data/${state.userId}`, {
        state: {
          text: 'Dane zawodnika',
          label: `${state.userName} ${state.userSurname}`,
          participantId: state.userId,
        },
      });
    dogDispatch({
      type: 'UPDATE_ONE_FIELD',
      fieldName: 'chosenDog',
      payload: {
        dogId: id,
        dogName: dogData.dogName,
        dogPkr: dogData.pkr,
      },
    });
    dogState.chosenDog && !contestState.contestId && navigate(`/user-dogs`);
  };

  const enterCompetitionDogData = () => {
    return dogState.chosenDog !== {} && contestState.contestId !== null
      ? '-enter-competition'
      : '';
  };

  return (
    <ColumnWrapper className={`dog-data${enterCompetitionDogData()}`}>
      <ColumnWrapper
        className={`dog-data-container${enterCompetitionDogData()}`}
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
            text={contestState.contestId ? 'potwierdź' : 'wróć do listy psów'}
            handler={handleConfirm}
            colors="green"
          />
        </SpecialButtonsContainerStyled>
        <ColumnWrapper paddingLeftRight={1} className="dog-data-details">
          {isPending && <Spinner />}
          {dogData &&
            Object.entries(renderDogData(dogData)).map((dataLine, index) => (
              <DataLine key={index} text={dataLine} />
            ))}
        </ColumnWrapper>
        <ColumnWrapper paddingLeftRight={1} className="dog-data-details-bar">
          Dane psa
        </ColumnWrapper>
      </ColumnWrapper>
      {contestState.contestId !== null && <EnterCompetitionContainer />}
    </ColumnWrapper>
  );
};
DogData.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DogData;
