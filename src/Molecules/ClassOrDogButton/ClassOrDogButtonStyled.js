import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';

const ClassOrDogButtonStyled = styled.button`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 4.375rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: solid 1px ${COLORS.grey800};
  margin: 0.5rem 0;
  background: white;
  border-radius: 0.75rem;
  color: ${COLORS.grey800};
  ${FONTS.h3}
`;

export default ClassOrDogButtonStyled;
