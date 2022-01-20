import ContestComponent from '../../Molecules/ContestComponent/ContestComponent';
import RANDOM_CONTESTS from '../../Data/Dummy-data/test-data-random-contests';

const ContestsPage = () => {
  return (
    <>
      <h1>LISTA KONKURSÓW</h1>
      <h2>WYBIERZ KONKURS</h2>
      <ContestComponent contestId={RANDOM_CONTESTS[0].id} contestIndex={0} />
    </>
  );
};

export default ContestsPage;
