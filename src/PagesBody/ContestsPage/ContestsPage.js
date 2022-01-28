import ContestComponent from '../../Molecules/ContestComponent/contestComponent';
import RANDOM_CONTESTS from '../../Data/Dummy-data/test-data-random-contests';

const ContestsPage = () => {
  return (
    <>
      <h1>LISTA KONKURSÓW</h1>
      <h2>WYBIERZ KONKURS</h2>
      <ContestComponent contestId={RANDOM_CONTESTS[0].id} contestIndex={0} />
      <ContestComponent contestId={RANDOM_CONTESTS[1].id} contestIndex={1} />
      <ContestComponent contestId={RANDOM_CONTESTS[2].id} contestIndex={2} />
    </>
  );
};

export default ContestsPage;
