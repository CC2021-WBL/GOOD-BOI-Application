import styled from 'styled-components';
import COLORS from '../../Styles/varsStyledComponents';
import FONTS from '../../Styles/fontsStyledComponents';

const ContestDetailsLineStyled = styled.div`
  padding: 0 0.625rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  line-height: 2rem;
  height: 2rem;
  border-bottom: 1px solid ${COLORS.grey00};
  text-transform: uppercase;
  ${(props) => props.highlight && `background-color: ${COLORS.grey100};`};
  ${(props) => props.judge && `${FONTS.label_semibold} padding: 0 0 0 1rem;`};
`;

export default ContestDetailsLineStyled;
