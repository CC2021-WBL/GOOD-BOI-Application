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

  ${(props) =>
    props.className[0] === 'user_profile' &&
    `
    @media only screen and (min-width: 740px) {
    flex: 1;
    height: 172px;
    margin: 0;
    flex-direction: column;
    justify-content: space-between;
    color: grey;
    border: 1.5px solid grey;
    font-weight: 100;
    
    h3 {
      font-size: 22px;
      width: 100%;
      padding: 20px;
      text-align: left;
      border-bottom: 1px solid grey;
    }

    p {
      margin: auto 0;
      padding: 10px;
    }
  }
  `}
  ${(props) =>
    props.className[1] === 'user_dogs' &&
    `
    @media only screen and (min-width: 740px) {
    grid-area: 2 / 1 / 4 / 2;
    align-self: flex-end;
  }
  `}
  ${(props) =>
    props.className[1] === 'user_contests' &&
    `
    @media only screen and (min-width: 740px) {
    grid-area: 4 / 2 / 6 / 3;
  }
  `}
  ${(props) =>
    props.className[1] === 'user_data' &&
    `
    @media only screen and (min-width: 740px) {
      grid-area: 2 / 2 / 4 / 3;
    align-self: flex-end;
  }
  `}
  ${(props) =>
    props.className[1] === 'user_upcoming' &&
    `
    @media only screen and (min-width: 740px) {
    grid-area: 4 / 1 / 6 / 2;
  }
  `}
`;

export default FakeButtonStyled;
