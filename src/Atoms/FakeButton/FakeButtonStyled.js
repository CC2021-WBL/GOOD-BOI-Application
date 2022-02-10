import FONTS from '../../Styles/fontsStyledComponents';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
//${(props) => handleColorType(props)};
// const handleBgAndColor = (props) => {
//   if (props.primary) {
//     return `color: ${props.theme.white}; background: ${props.theme.primary501};`;
//   }
//   if (props.secondary) {
//     return `color: ${props.theme.primary601}; background: ${props.theme.primary201};`;
//   }
//   if (props.ternary) {
//     return `color: ${props.theme.grey800}; background: ${props.theme.white};`;
//   }
// };

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
// const borderHandler = (props) => {
//   if (props.primary) {
//     return `border: 0.5px solid ${props.theme.grey800}`;
//   }
//   if (props.secondary) {
//     return `border: 0.5px solid ${props.theme.primary601};`;
//   }
//   if (props.ternary) {
//     return `border: 0.5px solid ${props.theme.grey800}`;
//   }
// };
/* ${(props) => handleBgAndColor(props)}; */
/* ${(props) => borderHandler(props)}; */

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
`;

export default FakeButtonStyled;
