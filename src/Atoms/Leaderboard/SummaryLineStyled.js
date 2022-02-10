import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const SummaryLineStyled = styled.div`
  display: flex;
  height: 4.6875rem;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.grey800};
  ${FONTS.body_semibold}
`;

export default SummaryLineStyled;
