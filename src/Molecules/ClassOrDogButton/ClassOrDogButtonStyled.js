import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';

const ClassOrDogButtonStyled = styled.button`
  display: flex;
  width: calc(100% - 2rem);
  height: 4.375rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: solid 1px ${COLORS.grey800};
  margin: 1rem;
  background: white;
  border-radius: 0.75rem;
  color: ${COLORS.grey800};
  ${FONTS.h3}
`;

export default ClassOrDogButtonStyled;
