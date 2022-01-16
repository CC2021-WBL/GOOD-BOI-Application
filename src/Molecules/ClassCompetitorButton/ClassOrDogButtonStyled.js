import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';

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
  color: ${COLORS.grey800};
  ${FONTS.h3}
  background: white;
  border: solid 1px ${COLORS.grey800};
  border-radius: 0.75rem; ;
`;

export default ClassOrDogButtonStyled;
