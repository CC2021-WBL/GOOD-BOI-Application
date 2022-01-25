import propTypes from 'prop-types';

import SpecialButton from '../../Atoms/SpecialButton/SpecialButton';
import SpecialButtonsContainerStyled from './SpecialButtonsContainerStyled';

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
  openDisqualifyModalHandler: propTypes.func.isRequired,
  openPenaltyModalHandler: propTypes.func.isRequired,
};

export default SpecialButtonsContainer;
