import styled from 'styled-components';

const UserProfileDataStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.625rem 0;
  border-bottom: ${(props) =>
    props.withEdit ? `1px solid ${props.theme.grey300}` : 'none'};
  margin-right: ${(props) => (props.withEdit ? '0' : '2.5rem')};
  text-align: left;

  h3 {
    color: ${({ theme }) => theme.grey800};
  }

  p {
    color: ${({ theme }) => theme.grey400};
  }

  .edit-btn {
    align-self: flex-end;
    border: none;
    margin: 0 0 0.625rem;
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.grey800};
    cursor: pointer;

    p {
      color: ${({ theme }) => theme.grey400};
    }
  }
`;

export default UserProfileDataStyled;
