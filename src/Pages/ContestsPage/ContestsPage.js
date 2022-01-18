// import InfoLabel from '../../Atoms/InfoLabel/InfoLabel';
import ContestComponent from '../../Molecules/ContestComponent/contestComponent';
import RANDOM_CONTESTS from '../../Data/Dummy-data/test-data-random-contests';

const ContestsPage = () => {
  const todayDate = new Date(2022, 2, 16);
  console.log('today date:');
  console.log(todayDate);

  return (
    <>
      <h1>LISTA KONKURSÓW</h1>
      <h2>WYBIERZ KONKURS</h2>
      <ContestComponent
        contestName={RANDOM_CONTESTS[0].name}
        contestDate={todayDate}
        contestCity={RANDOM_CONTESTS[0].city}
      />
    </>
  );
};

export default ContestsPage;
