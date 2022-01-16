<<<<<<< HEAD
import MainBtn from '../../Atoms/MainBtn/MainBtn';
import { Wrapper } from '../../Atoms/MainBtn/MainBtnStyled';
const ExercisesPage = () => {
  function primaryBtnHandler() {
    console.log('primary button clicked');
  }
  function secondaryBtnHandler() {
    console.log('secondary button clicked');
  }
  function ternaryBtnHandler() {
    console.log('ternary button clicked');
  }

  return (
    <>
      <h1>I am a Excersises Page Component</h1>
      <Wrapper>
        <MainBtn onClick={primaryBtnHandler} primary text="PRIMARY btn" />
        <MainBtn onClick={secondaryBtnHandler} secondary text="SECONDARY btn" />
        <MainBtn onClick={ternaryBtnHandler} ternary text="TERNARY btn" />
      </Wrapper>
    </>
=======
import CardWrapper from '../../Atoms/CardWrapper/CardWrapper';
import SpecialButtonsContainer from '../../Molecules/SpecialButtonsContainer';

const ExercisesPage = () => {
  return (
    <CardWrapper>
      <div>
        <h1>I am a Excersises Page Component</h1>
        <SpecialButtonsContainer></SpecialButtonsContainer>
      </div>
    </CardWrapper>
>>>>>>> development
  );
};

export default ExercisesPage;
