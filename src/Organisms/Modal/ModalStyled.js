import styled from 'styled-components';
import COLORS from '../../Styles/varsStyledComponents';
import FONTS from '../../Styles/fontsStyledComponents';

const ModalContainer = styled.div`
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  width: 252px;
  height: 306px;
  cursor: pointer;
  transform: translate(-50%, -60%);
  .confirmationWrapper {
    display: flex;
    width: 100%;
    height: 191px;
    flex-direction: column;
    justify-content: space-between;
    padding: 19px 31px;
    border-radius: 12px 12px 0px 0px;

    ${(props) =>
      props.theme &&
      `
        color: ${props.theme.color};
        background: ${props.theme.background};`}
    .title {
      ${FONTS.h3};
    }
    .about,
    .confirmation {
      ${FONTS.caption};
    }
  }

  .modalBackWrapper {
    display: flex;
    width: 100%;
    height: 115px;
    align-items: center;
    border: none;
    background: #fff8f8;
    border-radius: 0px 0px 12px 12px;

    .modalBack {
      display: flex;
      width: 100%;
      align-items: center;
      margin: 0 25px;

      .arrow {
        color: ${COLORS.grey400};
        font-size: 30px;
      }

      .back {
        margin: 0 0 0 15px;
        color: ${COLORS.grey400};
        ${FONTS.caption};
        text-align: left;
      }
    }
  }
`;

export default ModalContainer;
