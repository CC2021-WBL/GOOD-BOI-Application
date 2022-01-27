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
        theme="red"
        handler={openDisqualifyModalHandler}
        special
      />
      <SpecialButton
        text="-10 punktów"
        theme="yellow"
        handler={openPenaltyModalHandler}
      />
    </SpecialButtonsContainerStyled>
  );
};

SpecialButtonsContainer.propTypes = {
  handler: propTypes.func,
  openDisqualifyModalHandler: propTypes.func.isRequired,
  openPenaltyModalHandler: propTypes.func.isRequired,
};

export default SpecialButtonsContainer;
