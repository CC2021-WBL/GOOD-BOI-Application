import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';

const LinkWrapperStyled = styled.div`
  display: flex;
  width: 33%;
  height: 100%;
  align-items: center;
  cursor: pointer;
  gap: 5px;

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
