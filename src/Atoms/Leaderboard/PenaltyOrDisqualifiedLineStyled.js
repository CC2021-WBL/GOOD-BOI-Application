import styled from 'styled-components';
import COLORS from '../../Styles/varsStyledComponents';
import FONTS from '../../Styles/fontsStyledComponents';

const PenaltyOrDisqualifiedLineStyled = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: ${(props) =>
    props.DisqualifiedColor ? 'center;' : 'space-between;'};
  align-items: center;
  ${FONTS.body_semibold};

  background: ${(props) =>
    props.DisqualifiedColor ? COLORS.negative100 : COLORS.warning100};

  height: 3.125rem;
  border-bottom: 1px solid #9aa5b1;
  padding: 0 1rem;
`;

export default PenaltyOrDisqualifiedLineStyled;
