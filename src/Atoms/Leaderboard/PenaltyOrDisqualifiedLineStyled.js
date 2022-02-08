import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const PenaltyOrDisqualifiedLineStyled = styled.div`
  display: flex;
  height: 3.125rem;
  align-items: center;
  justify-content: ${(props) =>
    props.disqualifiedColor ? 'center;' : 'space-between;'};
  padding: 0 1rem;
  border-bottom: 1px solid #9aa5b1;
  background: ${(props) =>
    props.disqualifiedColor
      ? `${props.theme.negative100}`
      : `${props.theme.warning100}`};
  color: ${({ theme }) => theme.grey800};
  ${FONTS.body_semibold};
`;

export default PenaltyOrDisqualifiedLineStyled;
