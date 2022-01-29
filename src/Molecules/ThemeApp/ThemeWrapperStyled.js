import COLORS from '../../Styles/varsStyledComponents';
import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const ThemeWrapperStyled = styled.div`
  display: flex;
  width: 100%;
  height: 4.375rem;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid ${COLORS.grey200};

  p {
    color: ${COLORS.grey400};
    ${FONTS.caption};
  }

  div {
    width: 7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .switch {
      position: relative;
      width: 3.125rem;
      height: 1.875rem;

      input {
        width: 0;
        height: 0;
        opacity: 0;
      }
    }

    .slider {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border: 0.5px solid ${COLORS.grey800};
      border-radius: 24px;
      cursor: pointer;

      &::before {
        position: absolute;
        top: 0.125rem;
        left: 0.125rem;
        width: 1.5rem;
        height: 1.5rem;
        border: 0.5px solid ${COLORS.grey800};
        background: ${COLORS.white};
        border-radius: 50%;
        content: '';
        transition: transform 0.7s;
      }
    }

    input:checked + .slider::before {
      transform: translateX(20px);
    }

    input:checked + .slider {
      background: ${COLORS.primary801};
    }

    .dog {
      font-size: 1.5rem;
    }
    .dog--yellow {
      color: ${COLORS.warning200};
    }

    .dog--black {
      color: ${COLORS.grey800};
      transform: rotateY(180deg);
    }
  }
`;

export default ThemeWrapperStyled;
