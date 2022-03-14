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

  align-items: ${(props) => props.alignItems && `${props.alignItems}`};

  &.manager-page {
    padding: 2.2rem 1rem 0 1rem;
  }

  @media only screen and (min-width: 800px) {
    grid-area: 3 / 2 / 4 / 3;
    max-width: ${(props) =>
      props.maxWidthBigScr && `${props.maxWidthBigScr}rem`};
    &.user-dogs-column-wrapper {
      align-items: flex-end;
    }
    &.user-profile {
      gap: 1.25rem;
      /* height: 100vh; */
    }
    &.contests-column-wrapper {
      display: flex;
      max-width: 42.5rem;
      margin: 1.5625rem 0 0 0;
    }
    &.user-data {
      border: 1px solid ${({ theme }) => theme.grey200};
      border-radius: 0.9375rem;
      margin: 0 1rem 0 auto;
    }
  }
  @media only screen and (min-width: 1024px) {
    &.user-dogs-column-wrapper {
      align-items: center;
    }

    &.user-profile {
      height: 100%;
      display: grid;
      gap: 1.25rem;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(2, 10.625rem) 1fr;
      align-items: center;
    }
    &.user-data {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    &.contests-column-wrapper {
      display: flex;
      max-width: 680px;
      margin: 1.5625rem 0 0 0;
    }
  }
  @media only screen and (min-width: 1600px) {
    grid-area: 3 / 3 / 4 / 4;
  }
`;

export default ColumnWrapperStyled;
