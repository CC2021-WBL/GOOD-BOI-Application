import propTypes from 'prop-types';
import ModalContainer from './ModalStyled';
import { BsChevronLeft } from 'react-icons/bs';

const Modal = ({ onCloseHandler, modalData, onConfirmHandler }) => {
  console.log(modalData);
  const { about, back, confirmation, title, theme } = modalData;
  return (
    <ModalContainer theme={theme}>
      <div
        className="confirmationWrapper"
        onClick={onConfirmHandler}
        aria-hidden="true"
      >
        <h3 className="title">{title}</h3>
        <p className="about">{about}</p>
        <p className="confirmation">{confirmation}</p>
      </div>
      <div
        className="modalBackWrapper"
        aria-hidden="true"
        onClick={onCloseHandler}
      >
        <div className="modalBack">
          <BsChevronLeft className="arrow" />
          <p className="back">{back}</p>
        </div>
      </div>
    </ModalContainer>
  );
};

Modal.propTypes = {
  modalTitle: propTypes.string.isRequired,
  modalAbout: propTypes.string.isRequired,
  modalConfirmation: propTypes.string.isRequired,
  modalBack: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
  onCloseHandler: propTypes.func.isRequired,
  modalData: propTypes.object.isRequired,
  onConfirmHandler: propTypes.func.isRequired,
};

export default Modal;
