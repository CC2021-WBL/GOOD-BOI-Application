import styled from 'styled-components';

const UserProfileDataStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0.625rem 0;
  margin: 0 2.5rem 0 0;

  h3 {
    color: ${({ theme }) => theme.grey800};
  }

  &:last-child {
  }

  p {
    color: ${({ theme }) => theme.grey400};
  }
`;

export default UserProfileDataStyled;
