import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const DataLineStyled = styled.div`
  display: flex;
  min-height: 3rem;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 2px solid ${({ theme }) => theme.grey200};
  color: ${({ theme }) => theme.grey300};

  line-height: 3rem;
  ${FONTS.body_semibold};
  text-align: right;

  div:first-child {
    color: ${({ theme }) => theme.grey400};
    text-align: left;
  }

  @media only screen and (min-width: 1024px) {
    color: ${({ theme }) => theme.grey800};

    &.enter-competition-contest-name {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.grey800};
      border-bottom: none;
      padding: 1rem;
    }
    &.active,
    &.enter-competition-contest-date,
    &.enter-competition-contest-address {
      padding: 0.5rem 1rem;
      border-bottom: none;
    }

    &.future {
      background-color: ${({ theme }) => theme.grey200};
      color: ${({ theme }) => theme.grey800};
      border-bottom: none;
      padding: 1rem;
    }

    &.lastitem {
      border-radius: 0 0 0.75rem 0.75rem;
    }
    &.success {
      background-color: ${({ theme }) => theme.positive200};
    }
  }
`;

export default DataLineStyled;
