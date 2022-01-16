import CardWrapper from '../../Atoms/CardWrapper/CardWrapper';
import SpecialButtonsContainer from '../../Molecules/SpecialButtonsContainer';
import Footer from '../../Molecules/Footer/Footer';

const ExercisesPage = () => {
  return (
    <>
      <CardWrapper>
        <div>
          <h1>I am a Excersises Page Component</h1>
          <SpecialButtonsContainer></SpecialButtonsContainer>
        </div>
      </CardWrapper>
      <Footer />
    </>
  );
};

export default ExercisesPage;
