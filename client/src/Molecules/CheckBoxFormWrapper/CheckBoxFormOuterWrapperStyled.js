import styled from 'styled-components';

import COLORS from './../../Styles/varsStyledComponents';

const CheckBoxFormOuterWrapperStyled = styled.div`
  border: 1px solid #7b8794;
  display: flex;
  flex-direction: column;
  border-radius: 0.75rem;
  margin: 0 0 1rem 0;
  &.red-border {
    border: 0.0313rem solid transparent;
    outline: 0.0938rem solid ${COLORS.negative400};
  }
`;
export default CheckBoxFormOuterWrapperStyled;
