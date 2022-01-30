import styled from 'styled-components';

import COLORS from '../../Styles/varsStyledComponents';

const UserAddressStyled = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid ${COLORS.grey300};

  .address-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p {
      color: ${COLORS.grey400};
    }

    p:last-of-type {
      padding-bottom: 10px;
    }
  }

  .edit-btn {
    cursor: pointer;
    border: none;
    background-color: white;
  }
`;

export default UserAddressStyled;
