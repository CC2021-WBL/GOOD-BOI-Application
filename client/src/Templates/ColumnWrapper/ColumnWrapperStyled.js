import styled from 'styled-components';

import FONTS from '../../Styles/fontsStyledComponents';

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

  &.not-found-wrapper {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 35rem;
    margin: 0 auto;

    .main-content-wrapper {
      display: flex;
      width: 16.25rem;
      height: 7.5rem;
      flex-direction: column;
      justify-content: space-between;
      margin: 2.1875rem 0 4.25rem;

      h2 {
        color: ${({ theme }) => theme.grey800};
        ${FONTS.h2}
      }

      p {
        color: ${({ theme }) => theme.grey800};
        ${FONTS.caption}
      }
    }
    .buttons-wrapper {
      width: 100%;
    }
  }

  &.manager-page {
    padding: 2.2rem 1rem 0 1rem;
  }

  .incoming-contests {
    margin: 3.75rem 0 0 0;
    color: ${({ theme }) => theme.grey800};
    text-align: left;
  }

  &.register-form-column-wrapper {
    margin: auto;
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
    &.not-found-wrapper,
    &.user-data-wrapper,
    &.forgot-wrapper {
      grid-area: 3 / 1 / 4 / 3;
      margin: 0 auto;
    }
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
  }
  @media only screen and (min-width: 1600px) {
    grid-area: 3 / 3 / 4 / 4;
    &.not-found-wrapper,
    &.user-data-wrapper,
    &.forgot-wrapper {
      grid-area: 3 / 3 / 4 / 4;
    }
  }
`;

export default ColumnWrapperStyled;
