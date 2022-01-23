import Footer from '../../Molecules/Footer/Footer';
import MainButton from '../../Atoms/MainButton/MainButton';
const ClassSummaryPage = () => {
  return (
    <>
      <h1>I am a ClassSummary Page Component</h1>;
      <MainButton primary text="primary btn" />
      <MainButton secondary text="secondary btn" />
      <MainButton trinary text="trinary btn" />
      <Footer />
    </>
  );
};

export default ClassSummaryPage;
