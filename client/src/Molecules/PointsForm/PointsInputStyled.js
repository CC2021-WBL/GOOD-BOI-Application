import COLORS from '../../Styles/varsStyledComponents';
import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const PointsInputStyled = styled.input`
  width: 65%;
  max-width: 5rem;
  height: 3rem;
  border: 1px ${COLORS.grey800};
  background: ${({ theme }) => theme.white};
  border-radius: 0.75rem;
  color: ${({ theme }) => theme.grey800};
  ${FONTS.h1};
  text-align: center;
  :focus {
    color: ${({ theme }) => theme.grey800};
    outline: 2px solid ${({ theme }) => theme.grey800};
  }
`;

export default PointsInputStyled;
