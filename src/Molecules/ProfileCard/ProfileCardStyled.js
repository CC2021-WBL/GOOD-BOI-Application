import styled from 'styled-components';

import COLORS from '../../Styles/varsStyledComponents';

const ProfileCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;

  p {
    color: ${COLORS.grey400};
  }

  .container {
    text-align: start;
    border-bottom: 0.5px solid ${COLORS.grey300};

    :last-child {
      padding-bottom: 10px;
    }
  }
`;

export default ProfileCardStyled;
