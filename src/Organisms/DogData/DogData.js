import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import doggos from '../../Data/MongoDBMock/doggos';
import renderDogData from '../../Tools/renderDogData';
import DataLine from '../../Atoms/DataLine/DataLine';
import SpecialButton from '../../Atoms/SpecialButton/SpecialButton';
import SpecialButtonsContainerStyled from '../../Molecules/SpecialButtonsContainer/SpecialButtonsContainerStyled';
import { useContext, useEffect, useState } from 'react';
import { UserDataContext } from '../../Context/UserDataContext';
import { DogContext } from '../../Context/DogContext';
import { ContestContext } from '../../Context/ContestContext';

const DogData = ({ id }) => {
  let navigate = useNavigate();
  const [dogData, setDogData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const { state } = useContext(UserDataContext);
  const { dogState } = useContext(DogContext);
  const { contestState } = useContext(ContestContext);

  useEffect(() => {
    setDogData(doggos.find((dog) => dog.dogId === id));
    setIsPending(false);
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
