import propTypes from 'prop-types';
import ModalContainer from './ModalsStyled';
import { BsChevronLeft } from 'react-icons/bs';

const Modals = (props) => {
  const {
    modalAbout,
    modalBack,
    modalConfirmation,
    modalTitle,
    red,
    yellow,
    blue,
    onClick,
  } = props;

  return (
    <ModalContainer red={red} yellow={yellow} blue={blue}>
      <div className="confirmationWrapper">
        <h3>{modalTitle}</h3>
        <p>{modalAbout}</p>
        <p>{modalConfirmation}</p>
      </div>
      <div className="modalBackWrapper" aria-hidden="true" onClick={onClick}>
        <div className="modalBack">
          <BsChevronLeft />
          <p>{modalBack}</p>
        </div>
      </div>
    </ModalContainer>
  );
};

Modals.propTypes = {
  modalTitle: propTypes.string,
  modalAbout: propTypes.string,
  modalConfirmation: propTypes.string,
  modalBack: propTypes.string,
  red: propTypes.bool,
  yellow: propTypes.bool,
  blue: propTypes.bool,
  onClick: propTypes.func,
};

export default Modals;
