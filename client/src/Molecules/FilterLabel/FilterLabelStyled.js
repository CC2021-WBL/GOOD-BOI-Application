import styled from 'styled-components';

const FilterLabelStyled = styled.label`
  grid-area: 3 / 1 / 4 / 2;
  margin-top: 33px;
  display: flex;
  width: 100%;

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
    div{border-radius: 0 0 12px 12px;
      .innerWrapper {
        max-width: 600px;
      }
    }
  }
`;

export default FilterLabelStyled;
