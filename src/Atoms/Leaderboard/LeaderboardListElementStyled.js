import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';

const LeaderboardListElementStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 3.125rem;
  background: transparent;
  border-bottom: 1px solid #9aa5b1;
  ${FONTS.body_semibold};
  justify-content: space-between;
  &:hover {
    background: #f5f5f5;
  }
  .excersizes {
    justify-content: flex-start;
    justify-self: flex-start;
    align-self: center; // ok
    text-align: left;
    margin: 0 auto 0 0.5rem;
    flex-wrap: wrap-reverse;
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
