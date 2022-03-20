import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const TitleWrapperStyled = styled.div`
  width: 100%;
  flex-direction: column;
  margin: -3.9375rem 0 0 0;
  text-align: left;
  background-color: ${({ theme }) => theme.grey100};

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
