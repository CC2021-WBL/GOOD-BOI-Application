import styled from 'styled-components';
import { Link } from 'react-router-dom';

import FONTS from '../../Styles/fontsStyledComponents';

const getStyles = (bgColor, color) => {
  return `background:${bgColor}; color:${color}`;
};
const handleColorType = (props) => {
  switch (props.colors) {
    case 'primary':
      return getStyles(`${props.theme.primary501}`, `${props.theme.white}`);
    case 'secondary':
      return getStyles(
        `${props.theme.primary201}`,
        `${props.theme.primary601}`,
      );
    case 'ternary':
      return getStyles(`${props.theme.white}`, `${props.theme.grey800}`);
    default:
      return getStyles(`${props.theme.white}`, `${props.theme.grey800}`);
  }
};

const getBorders = (borders) => {
  return `border: 0.5px solid ${borders};`;
};

const handleBorders = (props) => {
  switch (props.colors) {
    case 'primary':
      return getBorders(`${props.theme.grey800}`);
    case 'secondary':
      return getBorders(`${props.theme.primary601}`);
    case 'ternary':
      return getBorders(`${props.theme.grey800}`);
    default:
      return getBorders(`${props.theme.grey800}`);
  }
};

const FakeButtonStyled = styled(Link)`
  display: flex;
  width: 100%;
  height: 3.25rem;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0;
  border-radius: 0.75rem;
  ${FONTS.button};
  ${(props) => handleColorType(props)};
  ${(props) => handleBorders(props)}
  text-transform: uppercase;

  &.contest-data-button-back {
    display: none;
    @media only screen and (min-width: 1024px) {
      display: flex;
      margin-right: 0.5rem;
    }
  }

  &.contest-data-button-enter {
    @media only screen and (min-width: 1024px) {
      margin-left: 0.5rem;
    }
  }

  &.landing-desktop-login {
    width: 19.375rem;
  }

  &.more-contests {
    height: 2.625rem;
    justify-content: right;
    padding: 0 1.375rem 0 0;
    border: none;
    margin-top: -0.5625rem;
    border-radius: 0 0 0.75rem 0.75rem;
    text-transform: none;
  }

  &.add-dogs {
    @media only screen and (min-width: 800px) {
      max-width: 16.25rem;
    }
  }

  &.user-profile {
    @media only screen and (min-width: 800px) {
      height: 100%;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      border: 1px solid ${({ theme }) => theme.grey200};
      margin: 0;
      background-color: ${({ theme }) => theme.grey00};
      font-weight: 100;
      text-align: left;

      .fakebtn-header {
        display: flex;
        width: 100%;
        height: 4rem;
        flex-direction: column;
        justify-content: center;
        padding: 0 1.25rem;
        border-bottom: 1px solid ${({ theme }) => theme.grey200};
        background-color: ${({ theme }) => theme.white};
        border-radius: 0.75rem 0.75rem 0 0;
        ${FONTS.h2};
        text-transform: capitalize;
      }

      .fakebtn-text {
        color: ${({ theme }) => theme.grey400};
        flex-grow: 1;
        flex-basis: 2.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 1.25rem;
        color: ${({ theme }) => theme.grey400};
        text-transform: none;
      }
    }

    &.user-dogs {
      align-self: flex-end;
      grid-area: 1 / 1 / 2 / span 3;
    }

    &.user-contests {
      align-self: flex-start;
      grid-area: 2 / 4 / 3 / span 3;
    }

    &.user-data {
      align-self: flex-end;
      margin-bottom: 1.25rem;
      grid-area: 1 / 4 / 2 / span 3;
      @media only screen and (min-width: 1024px) {
        margin-bottom: 0;
      }
    }

    &.user-upcoming {
      grid-area: 2 / 1 / 3 / span 3;
      @media only screen and (min-width: 800px) {
        align-self: flex-start;
        border: 1px solid ${({ theme }) => theme.primary601};
        background-color: ${({ theme }) => theme.primary101};

        .fakebtn-header {
          border-bottom: 1px solid ${({ theme }) => theme.primary601};
        }

        .fakebtn-text {
          color: ${({ theme }) => theme.primary601};
        }
      }
    }
  }
`;

export default FakeButtonStyled;
