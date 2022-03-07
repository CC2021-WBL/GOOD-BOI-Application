import styled from 'styled-components';

const FilterLabelStyled = styled.label`
  display: flex;
  width: 100%;

  div {
    display: flex;
    width: 100%;
    height: 2.43rem;
    align-items: center;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.grey100};

    
    @media (min-width: 800px) {
      border-radius:0 0 12px 12px;
      /* max-width: 80% ; */
      .innerWrapper {
        max-width: 600px;
      }
    }
  }
`;

export default FilterLabelStyled;
