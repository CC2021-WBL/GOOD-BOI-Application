import ContestComponent from '../../Molecules/ContestComponent/contestComponent';
import RANDOM_CONTESTS from '../../Data/Dummy-data/test-data-random-contests';
import Footer from '../../Molecules/Footer/Footer';

const ContestsPage = () => {
  return (
    <>
      <h1>LISTA KONKURSÓW</h1>
      <h2>WYBIERZ KONKURS</h2>
      <ContestComponent contestId={RANDOM_CONTESTS[0].id} contestIndex={0} />
      <Footer />
    </>
  );
};

export default ContestsPage;
