import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const DataLineStyled = styled.div`
  display: flex;
  min-height: 3rem;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 2px solid ${({ theme }) => theme.grey200};
  line-height: 3rem;
  ${FONTS.body_semibold};
  text-align: right;

  div:first-child {
    color: ${({ theme }) => theme.grey400};
    text-align: left;
  }
`;

export default DataLineStyled;
