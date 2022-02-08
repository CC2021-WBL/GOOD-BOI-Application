import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const LinkWrapperStyled = styled.div`
  display: flex;
  width: 33%;
  height: 100%;
  align-items: center;
  cursor: pointer;
  gap: 5px;

  .arrowLeft {
    color: ${({ theme }) => theme.grey200};
    font-size: 1.875rem;
  }

  .back {
    color: ${({ theme }) => theme.grey200};
    ${FONTS.caption}
  }
`;

export default LinkWrapperStyled;
