import styled from 'styled-components';
import COLORS from '../../Styles/varsStyledComponents';
import FONTS from '../../Styles/fontsStyledComponents';

const ModalContainer = styled.div`
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  width: 15.75rem;
  height: 19.125rem;
  cursor: pointer;
  transform: translate(-50%, -60%);
  .confirmationWrapper {
    display: flex;
    width: 100%;
    height: 11.9375rem;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.1875rem 1.9375rem;
    border-radius: 0.75rem 0.75rem 0rem 0rem;

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
    height: 7.1875rem;
    align-items: center;
    border: none;
    background: #fff8f8;
    border-radius: 0rem 0rem 0.75rem 0.75rem;

    .modalBack {
      display: flex;
      width: 100%;
      align-items: center;
      margin: 0 1.5625rem;

      .arrow {
        color: ${COLORS.grey400};
        font-size: 1.875rem;
      }

      .back {
        margin: 0 0 0 0.9375rem;
        color: ${COLORS.grey400};
        ${FONTS.caption};
        text-align: left;
      }
    }
  }
`;

export default ModalContainer;
