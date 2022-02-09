import styled from 'styled-components';

const UserProfileDataStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0.625rem 0;
  margin-right: ${(props) => (props.withEdit ? '0' : '40px')};

  h3 {
    color: ${({ theme }) => theme.grey800};
  }

  &:last-child {
  }

  p {
    color: ${({ theme }) => theme.grey400};
  }

  .edit-btn {
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.white};
    align-self: flex-end;

    p {
      color: ${({ theme }) => theme.grey400};
    }
  }
`;

export default UserProfileDataStyled;
