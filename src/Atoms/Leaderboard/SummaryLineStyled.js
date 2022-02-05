import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const SummaryLineStyled = styled.div`
  display: flex;
  height: 4.6875rem;
  color: ${({ theme }) => theme.grey800};
  align-items: center;
  justify-content: center;
  ${FONTS.body_semibold}
  background: ${({ theme }) => theme.white}
`;

export default SummaryLineStyled;
