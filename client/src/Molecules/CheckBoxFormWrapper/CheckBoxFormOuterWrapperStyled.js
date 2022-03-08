import styled from 'styled-components';

import COLORS from './../../Styles/varsStyledComponents';

const CheckBoxFormOuterWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #7b8794;
  margin: 0 0 1rem 0;
  border-radius: 0.75rem;
  &.red-border {
    border: 0.0313rem solid transparent;
    outline: 0.0938rem solid ${COLORS.negative400};
  }
`;
export default CheckBoxFormOuterWrapperStyled;
