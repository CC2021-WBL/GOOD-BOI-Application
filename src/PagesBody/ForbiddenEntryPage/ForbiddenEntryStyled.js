import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const ForbiddenWrapperStyled = styled.div`
  margin: 0 1rem;
  img {
    margin: 3.125rem 0;
  }

  h1 {
    ${FONTS.h2};
    color: ${({ theme }) => theme.grey800};
    margin: 0 0 3.125rem 0;
  }
`;

export default ForbiddenWrapperStyled;
