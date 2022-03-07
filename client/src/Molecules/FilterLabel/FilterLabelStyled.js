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
      border-radius: 0 0 0.75rem 0.75rem;
      background-color: ${({ theme }) => theme.grey00};
      justify-content: flex-end;
      .innerWrapper {
        max-width: 37.5rem;
        width: 65%;
        gap: 0.625rem;
        margin-right: 0.625rem;
      }
    }
  }
`;

export default FilterLabelStyled;
