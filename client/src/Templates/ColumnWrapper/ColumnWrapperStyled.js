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

  &.contests-column-wrapper {
    @media (min-width: 1200px) {
      width: 50%;
      display: flex;
      width: 680px;
      margin: 85px 0 0 0;
    }
  }
`;

export default ColumnWrapperStyled;
