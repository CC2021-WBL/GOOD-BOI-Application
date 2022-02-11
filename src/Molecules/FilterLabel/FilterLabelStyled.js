// import FONTS from '../../Styles/fontsStyledComponents';

import styled from 'styled-components';

const FilterLabelStyled = styled.label`
  display: flex;
  height: 2.43rem;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.grey100};
`;

export default FilterLabelStyled;
