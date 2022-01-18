import styled from 'styled-components';
import COLORS from '../../Styles/varsStyledComponents';
import FONTS from '../../Styles/fontsStyledComponents';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const handleBgAndColor = (props) => {
  if (props.primary) {
    return `color: ${COLORS.white}; background: ${COLORS.primary501};`;
  }
  if (props.secondary) {
    return `color: ${COLORS.primary601}; background: ${COLORS.primary201};`;
  }
  if (props.ternary) {
    return `color: ${COLORS.grey800}; background: transparent;`;
  }
};

const borderHandler = (props) => {
  if (props.primary) {
    return `border: 0.5px solid ${COLORS.grey800};`;
  }
  if (props.secondary) {
    return `border: 0.5px solid ${COLORS.primary601};`;
  }
  if (props.ternary) {
    return `border: 0.5px solid ${COLORS.grey800};`;
  }
};
const MainButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3.25rem;
  margin: 0.25rem 0 0.25rem 0;
  ${FONTS.button};
  // Bg colors:
  ${(props) => handleBgAndColor(props)};
  border-radius: 0.75rem;
  // Border properties:
  ${(props) => borderHandler(props)};
`;

// primary color: white ; background: #2f80ed (niebieskie ciemniejszy)
// secondary color: #1264D1 (ciemnoniebieski); background: #ACCCF8 (jasnoniebieski)
// trinary color: #323F4B ; background: transparent
// primary601: '#1264D1', ${COLORS.primary601}
// primary501: '#2F80ED', ${COLORS.primary501}
// primary201: '#ACCCF8', ${COLORS.primary201}
// grey800: '#323F4B', ${COLORS.grey800}

export default MainButtonStyled;
