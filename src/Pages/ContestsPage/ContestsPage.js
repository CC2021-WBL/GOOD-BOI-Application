import ContestComponent from '../../Molecules/ContestComponent/contestComponent';
import RANDOM_CONTESTS from '../../Data/Dummy-data/test-data-random-contests';
import { Link } from 'react-router-dom';

const ContestsPage = () => {
  return (
    <>
      <h1>LISTA KONKURSÓW</h1>
      <h2>WYBIERZ KONKURS</h2>
      <Link to={`/contests/${RANDOM_CONTESTS[0].id}/classes/`}>
        <ContestComponent contestId={RANDOM_CONTESTS[0].id} contestIndex={0} />
      </Link>
    </>
  );
};

export default ContestsPage;
