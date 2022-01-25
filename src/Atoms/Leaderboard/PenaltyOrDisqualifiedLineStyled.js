import COLORS from '../../Styles/varsStyledComponents';
import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const PenaltyOrDisqualifiedLineStyled = styled.div`
  display: flex;
  height: 3.125rem;
  align-items: center;
  justify-content: space-between;
  justify-content: ${(props) =>
    props.disqualifiedColor ? 'center;' : 'space-between;'};
  padding: 0 1rem;
  border-bottom: 1px solid #9aa5b1;
  background: ${(props) =>
    props.disqualifiedColor ? COLORS.negative100 : COLORS.warning100};
  ${FONTS.body_semibold};
`;

export default PenaltyOrDisqualifiedLineStyled;
