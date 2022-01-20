import propTypes from 'prop-types';
import ModalContainer from './ModalsStyled';
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
  modalTitle: propTypes.string,
  modalAbout: propTypes.string,
  modalConfirmation: propTypes.string,
  modalBack: propTypes.string,
  onClick: propTypes.func,
  onCloseHandler: propTypes.func,
  modalData: propTypes.object,
  onConfirmHandler: propTypes.func,
};

export default Modal;
