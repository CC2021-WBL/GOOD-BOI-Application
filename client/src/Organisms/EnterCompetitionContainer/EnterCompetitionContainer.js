import { useContext, useEffect, useState } from 'react';
import { ContestContext } from '../../Context/ContestContext';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import DataLine from '../../Atoms/DataLine/DataLine';
import { DogContext } from '../../Context/DogContext';
import { UserDataContext } from '../../Context/UserDataContext';

const EnterCompetitionContainer = ({ selectedClass, confirmation }) => {
  const { contestState } = useContext(ContestContext);
  const { dogState } = useContext(DogContext);
  const { state } = useContext(UserDataContext);
  console.log(selectedClass);
  console.log(confirmation);

  return (
    <ColumnWrapper
      paddingLeftRight={1}
      paddingTop={1}
      className="enter-competition-container-full"
    >
      <ColumnWrapper className="enter-competition-container">
        <ColumnWrapper paddingLeftRight={0} paddingTop={0.5}>
          <DataLine
            text={contestState.contestName}
            className={'enter-competition-contest-name'}
          />
          <DataLine
            text={`${contestState.contestStartDate}`}
            className={'enter-competition-contest-date'}
          />
          <DataLine
            text={`ul. ${contestState.contestAddress.street} ${
              contestState.contestAddress.numberOfHouse || ''
            }, ${contestState.contestAddress.city}`}
            className={'enter-competition-contest-address'}
          />
          <DataLine
            text={
              dogState.chosenDog.dogName == undefined
                ? `Wybierz psa`
                : `Pies: ${dogState.chosenDog.dogName}`
            }
            className={
              dogState.chosenDog.dogName == undefined ? `future` : `active`
            }
          />
          <DataLine
            text={
              dogState.chosenDog.dogPkr == undefined
                ? `Potwierdż dane psa`
                : `PKR: ${dogState.chosenDog.dogPkr}`
            }
            className={
              dogState.chosenDog.dogPkr == undefined ? `future` : `active`
            }
          />
          <DataLine
            text={
              state.userNameConfirmed == undefined
                ? `Potwierdź dane użytkownika`
                : `Użytkownik: ${state.userNameConfirmed}`
            }
            className={
              state.userNameConfirmed == undefined ? `future` : `active`
            }
          />
          <DataLine
            text={
              selectedClass === 0 ||
              selectedClass === 1 ||
              selectedClass === 2 ||
              selectedClass === 3
                ? `Klasa: ${selectedClass}`
                : `Wybierz klasę`
            }
            className={
              selectedClass === 0 ||
              selectedClass === 1 ||
              selectedClass === 2 ||
              selectedClass === 3
                ? `active`
                : `future`
            }
          />
          <DataLine
            text={
              confirmation ? `Potwierdzenie zgłoszenia` : `Potwierdź udział`
            }
            className={
              confirmation ? `active lastitem success` : `future lastitem`
            }
          />
        </ColumnWrapper>
      </ColumnWrapper>
    </ColumnWrapper>
  );
};

export default EnterCompetitionContainer;
