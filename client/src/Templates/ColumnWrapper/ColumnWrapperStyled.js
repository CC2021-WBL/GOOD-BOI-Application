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
  }

  .coming-contest {
    margin: 4.6875rem 0 0 0;
    text-align: left;
  }

  @media only screen and (min-width: 800px) {
    grid-area: 3 / 2 / 4 / 3;
    &.user-dogs-column-wrapper {
      align-items: flex-end;
    }
    &.user-profile {
      height: 100vh;
      gap: 1.25rem;
    }
    &.contests-column-wrapper {
      display: flex;
      max-width: 42.5rem;
      margin: 1.5625rem 0 0 0;
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
  }
  @media only screen and (min-width: 1600px) {
    grid-area: 3 / 3 / 4 / 4;
  }
`;

export default ColumnWrapperStyled;
