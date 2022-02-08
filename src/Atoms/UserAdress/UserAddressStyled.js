import styled from 'styled-components';

const UserAddressStyled = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid ${({ theme }) => theme.grey300};
  text-align: start;

  .address-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p:last-of-type {
      padding-bottom: 10px;
    }
  }

  .edit-btn {
    cursor: pointer;
    border: none;
    background-color: white;

    p {
      color: ${({ theme }) => theme.grey400};
    }
  }
`;

export default UserAddressStyled;
