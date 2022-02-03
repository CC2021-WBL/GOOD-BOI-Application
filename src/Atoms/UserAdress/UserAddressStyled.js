import styled from 'styled-components';

const UserAddressStyled = styled.div`
  border-bottom: 0.5px solid ${({ theme }) => theme.grey300};
  text-align: start;

  &:last-child {
    padding-bottom: 10px;
  }

  p {
    color: ${({ theme }) => theme.grey400};
  }
`;

export default UserAddressStyled;
