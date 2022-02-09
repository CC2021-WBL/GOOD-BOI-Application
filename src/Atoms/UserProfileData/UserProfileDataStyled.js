import styled from 'styled-components';

const UserProfileDataStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0.625rem 0;

  border-bottom: ${(props) =>
    props.withEdit ? `1px solid ${props.theme.grey300}` : 'none'};

  margin-right: ${(props) => (props.withEdit ? '0' : '2.5rem')};

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
    margin: 0 0 0.625rem;

    p {
      color: ${({ theme }) => theme.grey400};
    }
  }
`;

export default UserProfileDataStyled;
