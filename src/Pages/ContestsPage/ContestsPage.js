import InfoLabel from '../../Atoms/InfoLabel/InfoLabel';
import Footer from '../../Molecules/Footer/Footer';

const ContestsPage = () => {
  //RANDOM DATY
  const pastDate = new Date(1972, 5, 16, 10, 0);
  const todayDate = new Date();
  const futureDate = new Date(2077, 12, 10, 10, 0);

  return (
    <>
      <h1>I am a Contests Page Component</h1>
      <InfoLabel dateOfContest={todayDate}></InfoLabel>
      <InfoLabel dateOfContest={futureDate}></InfoLabel>
      <InfoLabel dateOfContest={pastDate}></InfoLabel>
      <InfoLabel classInfo={{ dogsAmount: 15 }}></InfoLabel>
      <InfoLabel classInfo={{ dogsAmount: 3 }}></InfoLabel>
      <InfoLabel classInfo={{ dogsAmount: 3 }}></InfoLabel>
      <Footer />
    </>
  );
};

export default ContestsPage;
