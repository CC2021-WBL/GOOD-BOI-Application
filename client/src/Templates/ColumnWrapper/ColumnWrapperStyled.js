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

  &.user-dogs-column-wrapper {
    align-items: center;
  }

  @media only screen and (min-width: 800px) {
    grid-area: 3 / 2 / 4 / 3;

    &.contests-column-wrapper {
      display: flex;
      max-width: 680px;
      margin: 1.5625rem 0 0 0;
    }
  }

  @media only screen and (min-width: 1600px) {
    grid-area: 3 / 3 / 4 / 4;
    &.user_profile {
      display: grid;
      align-items: center;
      gap: 1.25rem;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(2, 10.625rem) 1fr;
      align-items: center;
    }
  }
`;

export default ColumnWrapperStyled;
