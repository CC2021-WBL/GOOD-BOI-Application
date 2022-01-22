import { Link } from 'react-router-dom';
import InfoLabel from '../../Atoms/InfoLabel/InfoLabel';
import RANDOM_CONTESTS from '../../Data/Dummy-data/test-data-random-contests';

const ContestsPage = () => {
  // Randomowy konkurs
  let contestId = RANDOM_CONTESTS[0];
  //RANDOM DATY
  const pastDate = new Date(1972, 5, 16, 10, 0);
  const todayDate = new Date();
  const futureDate = new Date(2077, 12, 10, 10, 0);

  return (
    <>
      <h1>I am a Contests Page Component</h1>
      <Link to={`/contests/${contestId.name}/classes/`}>
        <InfoLabel dateOfContest={todayDate}></InfoLabel>
      </Link>
      <InfoLabel dateOfContest={futureDate}></InfoLabel>
      <InfoLabel dateOfContest={pastDate}></InfoLabel>
      <InfoLabel classInfo={{ dogsAmount: 15 }}></InfoLabel>
      <InfoLabel classInfo={{ dogsAmount: 3 }}></InfoLabel>
      <InfoLabel classInfo={{ dogsAmount: 3 }}></InfoLabel>
    </>
  );
};

export default ContestsPage;
