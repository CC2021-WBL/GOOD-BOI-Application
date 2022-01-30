import styled from 'styled-components';

import COLORS from '../../Styles/varsStyledComponents';

const UserFieldStyled = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid ${COLORS.grey300};
  padding: 20px 0;

  p {
    color: ${COLORS.grey400};
  }

  .edit-btn {
    cursor: pointer;
    border: none;
    background-color: white;
  }
`;

export default UserFieldStyled;
