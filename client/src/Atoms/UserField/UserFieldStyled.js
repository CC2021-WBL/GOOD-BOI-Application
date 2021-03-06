import styled from 'styled-components';

const UserFieldStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 0;
  border-bottom: 0.5px solid ${({ theme }) => theme.grey200};

  p {
    color: ${({ theme }) => theme.grey400};
  }

  .edit-btn {
    border: none;
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.grey800};
    cursor: pointer;
  }

  .edit-close {
    margin-right: 10px;
    transform: scale(1.8);
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.grey400};
    cursor: pointer;
  }

  @media only screen and (min-width: 800px) {
    :last-child {
      border-bottom: none;
    }
  }
`;

export default UserFieldStyled;
