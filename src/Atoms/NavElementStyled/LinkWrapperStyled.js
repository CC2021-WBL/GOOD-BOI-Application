import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';

const LinkWrapperStyled = styled.div`
  height: 100%;
  width: 33%;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  .arrowLeft {
    color: ${COLORS.grey200};
    font-size: 1.875rem;
  }

  .back {
    color: ${COLORS.grey200};
    ${FONTS.caption}
  }
`;

export default LinkWrapperStyled;
