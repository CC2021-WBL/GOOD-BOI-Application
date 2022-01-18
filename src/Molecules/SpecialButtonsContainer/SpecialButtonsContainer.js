import SpecialButton from '../../Atoms/SpecialButton/SpecialButton';
import SpecialButtonsContainerStyled from './SpecialButtonsContainerStyled';

const SpecialButtonsContainer = () => {
  return (
    <SpecialButtonsContainerStyled>
      <SpecialButton text="Dyskwalifikacja" special />
      <SpecialButton text="-10 punktów" />
    </SpecialButtonsContainerStyled>
  );
};

export default SpecialButtonsContainer;
