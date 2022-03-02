// import FONTS from '../../Styles/fontsStyledComponents';

import styled from 'styled-components';

const FilterLabelStyled = styled.label`
  width: 100%;
  display: flex;

  //wrapper
  div {
    width: 100%;
    height: 2.43rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.grey100};

    @media (min-width: 1200px) {
      //innerWrapper
      .innerWrapper {
        width: 600px;
      }
    }
  }
`;

export default FilterLabelStyled;
