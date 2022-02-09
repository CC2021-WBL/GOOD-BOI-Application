import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const InProgressContentWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin: 5.5rem 0 1.5625rem 0;
  }
  div {
    display: flex;
    width: 16.0625rem;
    height: 6.875rem;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 0 3.75rem 0;
    h3 {
      color: ${({ theme }) => theme.grey800};
      ${FONTS.h3};
    }
  }
`;

export default InProgressContentWrapperStyled;
