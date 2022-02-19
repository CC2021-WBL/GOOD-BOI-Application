import COLORS from '../../Styles/varsStyledComponents';
import styled from 'styled-components';

const UserFieldStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 0.5px solid ${COLORS.grey300};

  p {
    color: ${COLORS.grey400};
  }

  .edit-btn {
    border: none;
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.grey800};
    cursor: pointer;
  }
`;

export default UserFieldStyled;
