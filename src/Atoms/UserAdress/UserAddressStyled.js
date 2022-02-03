import COLORS from '../../Styles/varsStyledComponents';
import styled from 'styled-components';

const UserAddressStyled = styled.div`
  border-bottom: 0.5px solid ${COLORS.grey300};
  text-align: start;

  &:last-child {
    padding-bottom: 10px;
  }

  p {
    color: ${COLORS.grey400};
  }
`;

export default UserAddressStyled;
