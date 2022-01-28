import styled from 'styled-components';
import COLORS from '../../Styles/varsStyledComponents';
import FONTS from '../../Styles/fontsStyledComponents';

const DataLineStyled = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 3rem;
  min-height: 3rem;
  text-align: right;
  border-bottom: 2px solid ${COLORS.grey200};
  ${FONTS.body_semibold};

  div:first-child {
    color: ${COLORS.grey400};
    text-align: left;
  }
`;

export default DataLineStyled;
