import styled from 'styled-components';
import { Link } from 'react-router-dom';

import FONTS from '../../Styles/fontsStyledComponents';
import { device } from '../../Tools/device';

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

    ${(props) => handleBorders(props)};
  }
`;

export default FakeButtonStyled;
