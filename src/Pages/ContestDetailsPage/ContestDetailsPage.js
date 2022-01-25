import ContestDetails from '../../Organisms/ContestDetails/ContestDetails';
import RANDOM_CONTESTS from '../../Data/Dummy-data/test-data-random-contests';
const testContest = RANDOM_CONTESTS[0];

console.log(testContest);
const ContestDetailsPage = () => {
  return <ContestDetails contestInfo={testContest} />;
};

export default ContestDetailsPage;
