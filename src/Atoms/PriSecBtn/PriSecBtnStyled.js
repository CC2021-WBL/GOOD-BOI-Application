import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';

const PriSecBtnStyled = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 3.25rem;
  width: calc(100% - 2rem);
  margin: 0.5rem 1rem;
  padding: 1rem;
  ${FONTS.label_regular}
  //font-family: 'Mulish', sans-serif;
  //font-size: 0.9375rem;
  //font-weight: 600;
  border-radius: 0.75rem;
  color: ${(props) => (props.primary ? 'black' : 'whitesmoke')};
  background: ${(props) => (props.primary ? '#e3e3e3' : '#2f80ed')};
`;

export default PriSecBtnStyled;
