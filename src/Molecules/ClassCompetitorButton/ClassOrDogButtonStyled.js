import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';

const ClassOrDogButtonStyled = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 4.375rem;
  width: calc(100% - 2rem);
  margin: 1rem;
  padding: 1rem;
  color: #323f4b;
  ${FONTS.button}
  background: white;
  border: solid 1px #323f4b;
  border-radius: 0.75rem; ;
`;

export default ClassOrDogButtonStyled;
