import styled from 'styled-components';
import COLORS from '../../Styles/varsStyledComponents';
import FONTS from '../../Styles/fontsStyledComponents';

const ModalContainer = styled.div`
  width: 252px;
  height: 306px;
  z-index: 10;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  cursor: pointer;
  .confirmationWrapper {
    ${(props) =>
      props.theme &&
      `
        color: ${props.theme.color};
        background: ${props.theme.background};`}

    width: 100%;
    height: 191px;
    border-radius: 12px 12px 0px 0px;
    /* padding: 19px 31px; */

    display: flex;
    /* align-items: center;*/
    flex-direction: column;
    justify-content: space-around;
    /* align-content: center; */
    .title {
      ${FONTS.h3};
      /* margin: 0 0 25px 0; */
    }
    .about,
    .confirmation {
      ${FONTS.caption};
      /* margin: 0 0 20px 0; */
    }
  }

  .modalBackWrapper {
    width: 100%;
    height: 115px;
    background: #fff8f8;
    border-radius: 0px 0px 12px 12px;
    display: flex;
    align-items: center;
    border: none;
    .modalBack {
      width: 100%;
      margin: 0 25px;
      display: flex;
      align-items: center;
      .arrow {
        font-size: 30px;
        color: ${COLORS.grey400};
      }
      .back {
        ${FONTS.caption};
        color: ${COLORS.grey400};
        margin: 0 0 0 15px;
        text-align: left;
      }
    }
  }
`;

export default ModalContainer;
