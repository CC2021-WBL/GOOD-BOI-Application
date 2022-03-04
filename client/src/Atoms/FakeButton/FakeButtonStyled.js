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

  @media only screen and (min-width: 1600px) {
    &.user_profile {
      /* flex: 1; */
      height: 172px;
      margin: 0;
      text-align: left;
      flex-direction: column;
      justify-content: space-between;
      color: grey;
      font-weight: 100;
      align-items: flex-start;
      padding: 30px;
      background-color: ${({ theme }) => theme.grey00};

      // nie wiem co to h3 ??
      h3 {
        font-size: 22px;
        padding: 30px;
        text-align: left;
        border-bottom: 1px solid grey;
      }

      p.fakebtn_header {
        text-transform: capitalize;
        ${FONTS.h2};
        color: ${({ theme }) => theme.grey800};
        height: 62px;
      }

      p.fakebtn_text {
        text-transform: none;
        color: red;
      }
    }

    &.user_dogs {
      grid-area: 2 / 1 / 4 / 2;
      align-self: flex-end;
    }

    &.user_contests {
      grid-area: 4 / 2 / 6 / 3;
    }

    &.user_data {
      grid-area: 2 / 2 / 4 / 3;
      align-self: flex-end;
    }

    &.user_upcoming {
      grid-area: 4 / 1 / 6 / 2;
    }
  }
`;

export default FakeButtonStyled;
