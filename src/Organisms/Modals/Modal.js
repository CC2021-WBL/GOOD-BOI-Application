/* eslint-disable react/prop-types */
// TODO: Resolve eslint rules, delete next two lines
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import propTypes from 'prop-types';
import ModalContainer from './ModalsStyled';
import { BsChevronLeft } from 'react-icons/bs';

const Modal = ({ onCloseHandler, modalData, onConfirmHandler }) => {
  console.log(modalData);
  const { about, back, confirmation, title, theme } = modalData;
  return (
    // <ModalContainer theme={theme}> <= DOCELOWO
    <ModalContainer theme={theme} red>
      <div className="confirmationWrapper" onClick={onConfirmHandler}>
        <h3>{title}</h3>
        <p>{about}</p>
        <p>{confirmation}</p>
      </div>
      <div
        className="modalBackWrapper"
        aria-hidden="true"
        onClick={onCloseHandler}
      >
        <div className="modalBack">
          <BsChevronLeft />
          <p>{back}</p>
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
  red: propTypes.bool,
  yellow: propTypes.bool,
  blue: propTypes.bool,
  onClick: propTypes.func,
};

export default Modal;
