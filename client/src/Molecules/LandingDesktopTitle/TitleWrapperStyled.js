import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const TitleWrapperStyled = styled.div`
  display: flex;
  max-width: 37.5rem;
  flex-direction: column;
  align-items: center;
  margin: -3.9375rem 0 0 0;
  text-align: center;
  h1 {
    color: ${({ theme }) => theme.grey800};
    font-size: 3rem;
  }
  h3 {
    color: ${({ theme }) => theme.grey800};
    ${FONTS.h3}
  }
`;

export default TitleWrapperStyled;
