import styled from 'styled-components';

const UserFieldStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
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

  @media only screen and (min-width: 800px) {
    :last-child {
      border-bottom: none;
    }
  }
  @media only screen and (min-width: 1024px) {
  }
`;

export default UserFieldStyled;
