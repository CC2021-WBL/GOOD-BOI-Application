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

  &.user-profile {
    @media only screen and (min-width: 800px) {
      justify-content: flex-start;
      height: 100%;
      margin: 0;
      text-align: left;
      flex-direction: column;
      font-weight: 100;
      align-items: flex-start;
      background-color: ${({ theme }) => theme.grey00};
      border: 1px solid ${({ theme }) => theme.grey200};

      .fakebtn-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-transform: capitalize;
        width: 100%;
        height: 4rem;

        ${FONTS.h2};
        border-bottom: 1px solid ${({ theme }) => theme.grey200};
        border-radius: 0.75rem 0.75rem 0 0;
        background-color: ${({ theme }) => theme.white};
        padding: 0 1.25rem;
      }

      .fakebtn-text {
        color: ${({ theme }) => theme.grey400};
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-transform: none;
        padding: 0 1.25rem;
      }
    }

    @media only screen and (min-width: 800px) {
    }

    &.user-dogs {
      grid-area: 1 / 1 / 2 / span 3;
      align-self: flex-end;
    }

    &.user-contests {
      grid-area: 2 / 4 / 3 / span 3;
      align-self: flex-start;
    }

    &.user-data {
      grid-area: 1 / 4 / 2 / span 3;
      align-self: flex-end;
      margin-bottom: 1.25rem;
      @media only screen and (min-width: 1024px) {
        margin-bottom: 0;
      }
    }

    &.user-upcoming {
      grid-area: 2 / 1 / 3 / span 3;
      @media only screen and (min-width: 800px) {
        align-self: flex-start;
        background-color: ${({ theme }) => theme.primary101};
        border: 1px solid ${({ theme }) => theme.primary601};

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
