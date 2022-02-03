import COLORS from '../../Styles/varsStyledComponents';
import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const MenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 13px;

  .link {
    display: flex;
    align-items: center;
    margin: 0 0 24px 0;
    color: ${COLORS.grey800};
    .icon {
      margin-right: 20px;
      color: ${COLORS.grey200};
      font-size: 23px;
    }

    h6 {
      ${FONTS.body_regular};
      /* font-size: 24px; */
    }
  }
`;

export default MenuStyled;
