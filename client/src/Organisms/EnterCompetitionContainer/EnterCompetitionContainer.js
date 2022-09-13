import { useContext } from 'react';
import { ContestContext } from '../../Context/ContestContext';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import DataLine from '../../Atoms/DataLine/DataLine';
import { DogContext } from '../../Context/DogContext';
import { UserDataContext } from '../../Context/UserDataContext';

const EnterCompetitionContainer = ({ confirmation }) => {
  const { contestState } = useContext(ContestContext);
  const { chosenDog } = useContext(DogContext);
  const { state } = useContext(UserDataContext);
  const { contestName, contestStartDate, contestAddress } = contestState;
  const { selectedClass } = state;

  const address = () =>
    `ul. ${contestAddress.street} ${contestAddress.numberOfHouse || ''}, ${
      contestAddress.city
    }`;

  const chosenDogNameCheckText = () => {
    return chosenDog.dogName === undefined
      ? `Wybierz psa`
      : `Pies: ${chosenDog.dogName}`;
  };
  const chosenDogNameCheckClass = () => {
    return chosenDog.dogName === undefined ? `future` : `active`;
  };

  const chosenDogPkrCheckText = () => {
    return chosenDog.dogPkr === undefined
      ? `Potwierdź dane psa`
      : `PKR: ${chosenDog.dogPkr}`;
  };

  const chosenDogPkrCheckClass = () => {
    return chosenDog.dogPkr === undefined ? `future` : `active`;
  };

  const userNameCheckText = () => {
    return state.userNameConfirmed === null
      ? `Potwierdź dane użytkownika`
      : `Użytkownik: ${state.userNameConfirmed}`;
  };
  const userNameCheckClass = () => {
    return state.userNameConfirmed === null ? `future` : `active`;
  };

  const selectedClassCheckText = () => {
    return selectedClass === 0 ||
      selectedClass === 1 ||
      selectedClass === 2 ||
      selectedClass === 3
      ? `Klasa: ${selectedClass}`
      : `Wybierz klasę`;
  };
  const selectedClassCheckClass = () => {
    return selectedClass === 0 ||
      selectedClass === 1 ||
      selectedClass === 2 ||
      selectedClass === 3
      ? `active`
      : `future`;
  };

  const confirmationCheckText = () => {
    return confirmation ? `Potwierdzenie zgłoszenia` : `Potwierdź udział`;
  };
  const confirmationCheckClass = () => {
    return confirmation ? `active lastitem success` : `future lastitem`;
  };

  return (
    <ColumnWrapper
      paddingLeftRight={1}
      paddingTop={1}
      className="enter-competition-container-full"
    >
      <ColumnWrapper className="enter-competition-container">
        <ColumnWrapper paddingLeftRight={0} paddingTop={0.5}>
          <DataLine
            text={contestName}
            className={'enter-competition-contest-name'}
          />
          <DataLine
            text={contestStartDate}
            className={'enter-competition-contest-date'}
          />
          <DataLine
            text={address()}
            className={'enter-competition-contest-address'}
          />
          <DataLine
            text={chosenDogNameCheckText()}
            className={chosenDogNameCheckClass()}
          />
          <DataLine
            text={chosenDogPkrCheckText()}
            className={chosenDogPkrCheckClass()}
          />
          <DataLine
            text={userNameCheckText()}
            className={userNameCheckClass()}
          />
          <DataLine
            text={selectedClassCheckText()}
            className={selectedClassCheckClass()}
          />
          <DataLine
            text={confirmationCheckText()}
            className={confirmationCheckClass()}
          />
        </ColumnWrapper>
      </ColumnWrapper>
    </ColumnWrapper>
  );
};

export default EnterCompetitionContainer;
