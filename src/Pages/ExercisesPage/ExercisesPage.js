import MainBtn from '../../Atoms/MainBtn/MainBtn';
import { Wrapper } from '../../Atoms/MainBtn/MainBtnStyled';
const ExercisesPage = () => {
  return (
    <>
      <h1>I am a Excersises Page Component</h1>
      <Wrapper>
        <MainBtn primary text="primary btn" />
        <MainBtn secondary text="secondary btn" />
        <MainBtn trinary text="trinary btn" />
      </Wrapper>
    </>
  );
};

export default ExercisesPage;
