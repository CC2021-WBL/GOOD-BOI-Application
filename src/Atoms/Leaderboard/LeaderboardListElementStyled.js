import FONTS from '../../Styles/fontsStyledComponents';
import styled from 'styled-components';

const LeaderboardListElementStyled = styled.div`
  display: flex;
  width: 100%;
  color: ${({ theme }) => theme.grey800};
  min-height: 3.125rem;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  border-bottom: 1px solid #9aa5b1;
  background: ${(props) =>
    props.disqualified ? `${props.theme.grey100}` : 'transparent;'};
  ${FONTS.body_semibold};

  .exercises {
    justify-content: flex-start;
    margin: 0 auto 0 0.5rem;
    justify-self: flex-start;
    text-align: left;
  }
  .index {
    margin-left: 1rem;
    text-align: left;
  }
  .points {
    margin-right: 1rem;
  }
`;

export default LeaderboardListElementStyled;
