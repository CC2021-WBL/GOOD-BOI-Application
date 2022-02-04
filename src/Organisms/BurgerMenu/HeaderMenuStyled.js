import COLORS from '../../Styles/varsStyledComponents';
import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const HeaderMenuStyled = styled.div`
  display: flex;
  width: 233px;
  height: 56px;
  align-items: center;
  justify-content: space-between;
  padding: 0 90px 0 18px;
  border-bottom: 0.48px solid ${COLORS.grey400};
  color: ${COLORS.grey800};

  ${FONTS.h3}
  .x {
    font-size: 24px;
    &:hover {
      cursor: pointer;
    }
  }
`;
export default HeaderMenuStyled;
