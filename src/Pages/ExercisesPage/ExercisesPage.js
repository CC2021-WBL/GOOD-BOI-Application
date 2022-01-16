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
  );
};

export default ExercisesPage;
