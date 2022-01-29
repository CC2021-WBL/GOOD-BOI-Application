import LeaderboardListElement from './../../Atoms/Leaderboard/LeaderboardListElement';
import LeaderboardListStyled from './LeaderboardListStyled';
import checkIfDisqualified from '../../Tools/checkIfDisqualified';
import propTypes from 'prop-types';

// Leaderboardlist will accept two props when rendered on PAST CONTEST LEADERBOARD PAGE / uses contests -> summaryResults
// Leaderboardlist will accept THREE props when rendered on DOG SUMMARY PAGE / uses singleDogResults
// Na dzien dzisiejszy brak jest wpisow wynikow poszczegolnych cwiczen dla konkretnego psa - czyli nie da sie wyswietlic dog summary page

// const fakeId = 'a0347677-c3c9-4edc-9d46-fed4a958fdc2';
// const fakeClass = '1';
// const fakeDogName = 'Kluska';

const LeaderboardList = ({ result }) => {
  let disqualified =
    checkIfDisqualified({ result }) === true ? 'disqualifiedColor' : '';
  return (
    // list of leaderboard Woof/dogSummary
    <LeaderboardListStyled>
      {result.map((arrElement, index) => {
        return (
          <LeaderboardListElement
            key={index}
            text={arrElement.text}
            score={arrElement.score}
            index={index}
            disqualified={disqualified}
          />
        );
      })}
    </LeaderboardListStyled>
  );
};

LeaderboardList.propTypes = {
  result: propTypes.array.isRequired,
  // fakeId: propTypes.string.isRequired,
  // fakeClass: propTypes.string.isRequired,
  // fakeDogName: propTypes.string,
};
export default LeaderboardList;
