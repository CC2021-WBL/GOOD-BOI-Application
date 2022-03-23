import { useContext } from 'react';
import { ContestContext } from '../../Context/ContestContext';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import DataLine from '../../Atoms/DataLine/DataLine';
import { DogContext } from '../../Context/DogContext';

const EnterCompetitionContainer = () => {
  const { contestState } = useContext(ContestContext);
  const { dogState } = useContext(DogContext);
  console.log(contestState);
  console.log(dogState);

  return (
    <ColumnWrapper
      paddingLeftRight={1}
      paddingTop={1}
      className="enter-competition-container-full"
    >
      <ColumnWrapper className="enter-competition-container">
        <ColumnWrapper paddingLeftRight={1} paddingTop={0.5}>
          <DataLine text={contestState.contestName} />
          <DataLine
            text={[
              `
              ${contestState.contestAddress.street} ${
                contestState.contestAddress.numberOfHouse || ''
              }, ${contestState.contestAddress.city.toUpperCase()}`,
              contestState.contestStartDate,
            ]}
          />
          {/*<DataLine*/}
          {/*  text={*/}
          {/*    dogState.dogsArray === 0*/}
          {/*      ? `Wybierz psa`*/}
          {/*      : dogState.chosenDog.dogName*/}
          {/*  }*/}
          {/*/>*/}
          <DataLine text={`Potwierdż dane psa`} />
          <DataLine text={`Potwierdź dane użytkownika`} />
          <DataLine text={`Wybierz klasę`} />
          <DataLine text={`Potwierdź udział`} />
        </ColumnWrapper>
      </ColumnWrapper>
    </ColumnWrapper>
  );
};

export default EnterCompetitionContainer;
