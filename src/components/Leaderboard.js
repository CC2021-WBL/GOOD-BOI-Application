import styled from "styled-components";
import LeaderboardBtn from "./LeaderboardBtn";

const Wrapper = styled.div`
  margin: 0 auto 0 auto;
  width: 700px;
  display: block;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Leaderboard = (props) => {
  return (
    <Wrapper>
      <LeaderboardBtn text={props.text} score={props.score} />
      <LeaderboardBtn text={props.text1} score={props.score1} />
      <LeaderboardBtn text={props.text2} score={props.score2} />
    </Wrapper>
  );
};
export default Leaderboard;
