import styled from 'styled-components';

const ColumnWrapperStyled = styled.div`
  grid-area: 3 / 1 / 4 / 2;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: ${(props) =>
    props.paddingLeftRight &&
    `0 ${props.paddingLeftRight}rem 0 0${props.paddingLeftRight}rem`};
  padding-top: ${(props) => props.paddingTop && `${props.paddingTop}rem`};
  padding-bottom: ${(props) =>
    props.paddingBottom && `${props.paddingBottom}rem`};

  &.contests-column-wrapper {
    @media (min-width: 1200px) {
      display: flex;
      width: 680px;
      margin: 85px 0 0 0;
    }}
  &.manager-page {
    padding: 2.2rem 1rem 0 1rem;
  }

  @media only screen and (min-width: 800px) {
    grid-area: 3 / 2 / 4 / 3;
    /* overflow: scroll; */
  }
  @media only screen and (min-width: 1600px) {
    grid-area: 3 / 3 / 4 / 4;
    &.user_profile {
      display: grid;
      gap: 1.25rem;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: 1fr repeat(2, 10.625rem) 1fr;
      align-items: center;
    }
  }
`;

export default ColumnWrapperStyled;
