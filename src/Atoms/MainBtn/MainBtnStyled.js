import styled from 'styled-components';
// import COLORS from '../../Styles/varsStyledComponents';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainBtnStyled = styled.button`
  display: block;
  width: 343px;
  height: 50px;
  color: ${(props) => (props.primary ? 'whitesmoke' : 'black')};
  font-size: 15px;
  font-weight: 600;
  background: ${(props) =>
    !props.primary
      ? !props.secondary
        ? 'transparent'
        : '#ACCCF8'
      : '#2f80ed'};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  // TODO: COLOR vars
  /* color: $[COLORS.primary201]; -- > to dziala  */
`;
// primary color: white ; background: #2f80ed (niebieskie ciemniejszy)
// secondary color: #1264D1 (ciemnoniebieski); background: #ACCCF8 (jasnoniebieski)
// trinary color: #323F4B ; background: transparent
// primary601: '#1264D1',
// primary501: '#2F80ED',
// primary201: '#ACCCF8',
// grey800: '#323F4B',

export default MainBtnStyled;
