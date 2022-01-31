import styled from 'styled-components';

import COLORS from '../../Styles/varsStyledComponents';

const UserAddressStyled = styled.div`
  text-align: start;
  border-bottom: 0.5px solid ${COLORS.grey300};

  &:last-child {
    padding-bottom: 10px;
  }

  p {
    color: ${COLORS.grey400};
  }
`;

export default UserAddressStyled;
