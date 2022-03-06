import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const MenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5625rem 0.8125rem;

  .link {
    display: flex;
    align-items: center;
    margin: 0 0 1.5rem 0;
    color: ${({ theme }) => theme.grey800};

    .icon {
      margin-right: 1.25rem;
      color: ${({ theme }) => theme.grey200};
      font-size: 1.4375rem;
    }

    h6 {
      ${FONTS.body_regular};

      &.log-out {
        font-weight: 800;
      }
    }
  }
`;

export default MenuStyled;
