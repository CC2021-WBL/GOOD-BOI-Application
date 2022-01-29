import styled from 'styled-components';
import COLORS from '../../../Styles/varsStyledComponents';
import FONTS from '../../../Styles/fontsStyledComponents';

const ContestDetailsTogglerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.75rem;
  background-color: ${COLORS.primary101};
  ${FONTS.label_semibold};
  gap: 0.75rem;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }
`;

export default ContestDetailsTogglerStyled;
