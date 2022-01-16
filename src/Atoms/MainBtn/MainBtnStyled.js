import styled from 'styled-components';
import COLORS from '../../Styles/varsStyledComponents';
import FONTS from '../../Styles/fontsStyledComponents';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainBtnStyled = styled.button`
  display: block;
  width: 343px;
  height: 50px;
  color: ${(props) =>
    !props.primary
      ? !props.secondary
        ? `${COLORS.grey800}`
        : `${COLORS.primary601}`
      : `${COLORS.white}`};
  ${FONTS.button};
  background: ${(props) =>
    !props.primary
      ? !props.secondary
        ? 'transparent'
        : `${COLORS.primary201}`
      : `${COLORS.primary501}`};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// primary color: white ; background: #2f80ed (niebieskie ciemniejszy)
// secondary color: #1264D1 (ciemnoniebieski); background: #ACCCF8 (jasnoniebieski)
// trinary color: #323F4B ; background: transparent
// primary601: '#1264D1', ${COLORS.primary601}
// primary501: '#2F80ED', ${COLORS.primary501}
// primary201: '#ACCCF8', ${COLORS.primary201}
// grey800: '#323F4B', ${COLORS.grey800}

export default MainBtnStyled;
