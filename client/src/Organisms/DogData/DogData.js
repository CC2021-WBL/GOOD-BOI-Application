import { useContext, useEffect, useState } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import { ContestContext } from '../../Context/ContestContext';
import DataLine from '../../Atoms/DataLine/DataLine';
import { DogContext } from '../../Context/DogContext';
import PropTypes from 'prop-types';
import SpecialButton from '../../Atoms/SpecialButton/SpecialButton';
import SpecialButtonsContainerStyled from '../../Molecules/SpecialButtonsContainer/SpecialButtonsContainerStyled';
import Spinner from '../../Atoms/Spinner/Spinner';
import { UserDataContext } from '../../Context/UserDataContext';
import renderDogData from '../../Tools/renderDogData';
import { requestOptionsGET } from '../../Tools/FetchData/requestOptions';
import { useNavigate } from 'react-router-dom';

const DogData = ({ id }) => {
  let navigate = useNavigate();
  const [dogData, setDogData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const { state } = useContext(UserDataContext);
  const { dogState } = useContext(DogContext);
  const { contestState } = useContext(ContestContext);

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
    dogState.chosenDog && !contestState.contestId && navigate(`/user-dogs`);
  };

  return (
    <ColumnWrapper>
      <SpecialButtonsContainerStyled>
        <SpecialButton
          left
          text="edytuj dane psa"
          handler={handleEdit}
          colors="blue"
        />
        <SpecialButton
          right
          text="potwierdź dane psa"
          handler={handleConfirm}
          colors="green"
        />
      </SpecialButtonsContainerStyled>
      <ColumnWrapper paddingLeftRight={1}>
        {isPending && <Spinner />}
        {dogData &&
          Object.entries(renderDogData(dogData)).map((dataLine, index) => (
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
