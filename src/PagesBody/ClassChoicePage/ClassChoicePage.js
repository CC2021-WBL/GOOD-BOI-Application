import { useContext } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import { ContestContext } from '../../Context/ContestContext';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import contests from '../../Data/MongoDBMock/contests';

const ClassChoicePage = () => {
  const { contestState } = useContext(ContestContext);
  const { contestId } = contestState;

  const contestClasses = contests.find(
    (contest) => contest.contestId === contestId,
  ).obedienceClasses;

  // to działa już teraz - odczytuje po contestId klasy które były w danym contescie
  // i po wyraniu klasy przenosi nas do leaderboarda dla danego contestuId/klasy

  // trzeba jeszcze dodać jakąś wersję uzależnioną od tego jak jesteśmy w ścieżce zgłaszania
  // przechodzimy przez contest-zgłos się-psy-wybierz psa-potwierdz-participanta
  // i teraz tu trzeba uzależnić ze jak jestesmy w tej ścieżce
  // to żeby robić taki sam return jak to co poniżej tylko z inną ścieżką

  return (
    <ColumnWrapper paddingLeftRight={1} paddingTop={0.25}>
      {Object.keys(contestClasses).map((obedienceClass, index) => {
        return (
          <FakeButton
            key={index}
            text={`Klasa ${obedienceClass}`}
            to={`../contests/${contestId}/classes/${obedienceClass}/leaderboard`}
          />
        );
      })}
    </ColumnWrapper>
  );
};

export default ClassChoicePage;
