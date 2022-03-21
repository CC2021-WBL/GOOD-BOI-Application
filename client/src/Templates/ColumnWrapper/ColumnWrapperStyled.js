import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const ColumnWrapperStyled = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: ${(props) =>
    props.paddingLeftRight &&
    `0 ${props.paddingLeftRight}rem 0 0${props.paddingLeftRight}rem`};
  padding-top: ${(props) => props.paddingTop && `${props.paddingTop}rem`};
  padding-bottom: ${(props) =>
    props.paddingBottom && `${props.paddingBottom}rem`};
  grid-area: 3 / 1 / 4 / 2;

  &.manager-page {
    padding: 2.2rem 1rem 0 1rem;
    margin: 0 auto;
  }

  .incoming-contests {
    margin: 3.75rem 0 0 0;
    color: ${({ theme }) => theme.grey800};
    text-align: left;
  }

  &.register-form-column-wrapper,
  &.contest-form-column-wrapper,
  &.role-page-column-wrapper {
    margin: 0 auto;
  }

  .login-form-captions {
    display: none;
    color: ${({ theme }) => theme.grey800};
    ${FONTS.caption};
    text-align: left;
    margin: 0.5rem;
  }

  .login-form-header {
    ${FONTS.h2};
    line-height: 2.5;
  }

  .login-form-centered {
    text-align: center;
  }

  &.contest-data-buttons {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }

  @media only screen and (min-width: 800px) {
    grid-area: 3 / 2 / 4 / 3;
    max-width: ${(props) =>
      props.maxWidthBigScreen && `${props.maxWidthBigScreen}rem`};
    align-items: ${(props) => props.alignItems && `${props.alignItems}`};

    &.user-dogs-column-wrapper {
      align-items: flex-end;
    }

    &.user-profile {
      gap: 1.25rem;
    }

    &.contests-column-wrapper {
      display: flex;
      max-width: 42.5rem;
      margin: 1.5625rem 0 0 0;
    }

    &.user-data-wrapper {
      border: 1px solid ${({ theme }) => theme.grey200};
      border-radius: 0.9375rem;
      margin: 0 auto;
      height: fit-content;
    }

    &.login-column-wrapper {
      max-width: 470px;
      border: 1px solid ${({ theme }) => theme.grey200};
      border-radius: 0.9375rem;
      padding: 1.875rem;
      margin: auto;
      background-color: ${({ theme }) => theme.white};
      color: ${({ theme }) => theme.grey800};
    }

    .login-form-captions {
      display: block;
    }

    @media only screen and (min-width: 1024px) {
      &.user-dogs-column-wrapper {
        align-items: center;
      }

      &.user-profile {
        display: grid;
        height: 100%;
        align-items: center;
        gap: 1.25rem;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(2, 10.625rem) 1fr;
      }

      &.user-data-wrapper {
        margin: 0 auto;
        margin-bottom: 1rem;
      }

      &.contests-column-wrapper {
        display: flex;
        max-width: 42.5rem;
        margin: 1.5625rem 0 0 0;
      }

      &.login-column-wrapper {
        max-width: 29.375rem;
        border: 1px solid ${({ theme }) => theme.grey200};
        border-radius: 0.9375rem;
        margin: auto;
      }

      .login-form-captions {
        display: block;
        background-color: ${({ theme }) => theme.white};
      }

      &.dog-data-container {
        max-width: 35rem;
        border: 1px solid ${({ theme }) => theme.grey200};
        border-radius: 0.9375rem;
        margin: 1.5rem auto auto;
        display: flex;
        flex-direction: column-reverse;
      }

      &.dog-data-details {
        margin-bottom: 1rem;
      }

      &.dog-data-details-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 3rem;
        border-radius: 0.75rem 0.75rem 0 0;
        background-color: ${({ theme }) => theme.grey200};
      }

      @media only screen and (min-width: 1600px) {
        grid-area: 3 / 3 / 4 / 4;
      }
    }
    &.contest-data {
      display: grid;
      height: 100%;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
    }

    &.contest-data-details {
      grid-area: 1/1/2/2;
    }

    &.contest-data-buttons {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 1rem;
    }
  }
`;

export default ColumnWrapperStyled;
