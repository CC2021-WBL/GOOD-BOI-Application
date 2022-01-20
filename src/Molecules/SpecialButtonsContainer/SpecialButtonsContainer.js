import SpecialButton from '../../Atoms/SpecialButton/SpecialButton';
import SpecialButtonsContainerStyled from './SpecialButtonsContainerStyled';
import propTypes from 'prop-types';

const SpecialButtonsContainer = ({
  openDisqualifyModalHandler,
  openPenaltyModalHandler,
}) => {
  return (
    <SpecialButtonsContainerStyled>
      <SpecialButton
        text="Dyskwalifikacja"
        special
        handler={openDisqualifyModalHandler}
      />
      <SpecialButton text="-10 punktów" handler={openPenaltyModalHandler} />
    </SpecialButtonsContainerStyled>
  );
};

SpecialButtonsContainer.propTypes = {
  handler: propTypes.func,
  openDisqualifyModalHandler: propTypes.func,
  openPenaltyModalHandler: propTypes.func,
};

export default SpecialButtonsContainer;
