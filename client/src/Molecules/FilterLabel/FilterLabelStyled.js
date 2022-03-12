import styled from 'styled-components';

const FilterLabelStyled = styled.label`
  display: flex;
  width: 100%;
  margin-top: 2.0625rem;
  grid-area: 3 / 1 / 4 / 2;

  div {
    display: flex;
    width: 100%;
    height: 2.43rem;
    align-items: center;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.grey100};
  }

  @media only screen and (min-width: 800px) {
    margin-top: 0;
    div {
      justify-content: flex-end;
      background: ${({ theme }) => theme.grey00};
      border-radius: 0 0 0.75rem 0.75rem;
      .innerWrapper {
        width: 65%;
        margin: 0 0.625rem 0 0;
        gap: 0.625rem;
      }
    }
  }
`;

export default FilterLabelStyled;
