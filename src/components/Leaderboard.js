import styled from "styled-components";
import LeaderboardBtn from "./LeaderboardBtn";

const LeaderboardMolecule = styled.div`
  /* background: black; */
  margin: 0 auto 0 auto;
  width: 700px;
  display: block;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* outline: 2px dotted black; */
`;

const Leaderboard = (props) => {
  return (
    <LeaderboardMolecule>
      <LeaderboardBtn text={props.text} score={props.score} />
      <LeaderboardBtn text={props.text1} score={props.score1} />
      <LeaderboardBtn text={props.text2} score={props.score2} />
      {/* How to automatically create more contestants on the list?/or less */}
    </LeaderboardMolecule>
  );
};
export default Leaderboard;
