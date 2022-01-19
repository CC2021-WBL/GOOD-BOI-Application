import SpecialButton from '../../Atoms/SpecialButton/SpecialButton';
import SpecialButtonsContainerStyled from './SpecialButtonsContainerStyled';
import propTypes from 'prop-types';

const SpecialButtonsContainer = ({ handler }) => {
  return (
    <SpecialButtonsContainerStyled>
      <SpecialButton text="Dyskwalifikacja" special handler={handler} />
      <SpecialButton text="-10 punktów" handler={handler} />
    </SpecialButtonsContainerStyled>
  );
};

SpecialButtonsContainer.propTypes = {
  handler: propTypes.func.isRequired,
};

export default SpecialButtonsContainer;
