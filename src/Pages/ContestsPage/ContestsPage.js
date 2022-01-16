// import InfoLabel from '../../Atoms/InfoLabel/InfoLabel';
import ContestComponent from '../../Molecules/ContestComponent/ContestComponent';
import RANDOM_CONTESTS from '../../Data/Dummy-data/test-data-random-contests';

const ContestsPage = () => {
  //RANDOM DATY
  //const pastDate = new Date(1972, 5, 16, 10, 0);
  const todayDate = new Date();

  return (
    <>
      <h1>LISTA KONKURSÓW</h1>
      <h2>WYBIERZ KONKURS</h2>
      <ContestComponent
        contestName={RANDOM_CONTESTS[0].name}
        contestDate={todayDate}
        contestCity={RANDOM_CONTESTS[0].city}
      ></ContestComponent>
    </>
  );
};

export default ContestsPage;
