import styled from 'styled-components';
import COLORS from '../../Styles/varsStyledComponents';
// import FONTS from '../../Styles/fontsStyledComponents';

const ModalContainer = styled.div`
  width: 252px;
  height: 306px;
  z-index: 10;
  position: fixed;

  cursor: pointer;
  .confirmationWrapper {
    background: ${(props) =>
      props.red
        ? COLORS.negative100
        : props.yellow
        ? COLORS.warning100
        : props.blue
        ? COLORS.primary201
        : COLORS.warning600};

    width: 100%;
    height: 191px;
    border-radius: 12px 12px 0px 0px;
  }

  .modalBackWrapper {
    width: 100%;
    height: 115px;
    left: 0px;
    top: 191px;

    background: #fff8f8;
    border-radius: 0px 0px 12px 12px;
    p {
      margin: 0;
    }
  }
`;

export default ModalContainer;
