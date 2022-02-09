import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const HeaderMenuStyled = styled.div`
  display: flex;
  height: 3.5rem;
  align-items: center;
  padding: 0 5.625rem 0 1.125rem;
  border-bottom: 0.48px solid ${({ theme }) => theme.grey400};
  color: ${({ theme }) => theme.grey800};

  ${FONTS.h3}
  .x {
    margin-right: 0.9375rem;
    font-size: 1.5rem;
    &:hover {
      cursor: pointer;
    }
  }
`;
export default HeaderMenuStyled;
