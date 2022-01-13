import styled from "styled-components";

const Btn = styled.div`
  display: flex;
  align-self: center;
  width: 343px;
  height: 50px;
  color: black;
  background: transparent;
  border: none;
  cursor: pointer;
  border-bottom: 1px solid #9aa5b1;
  font-size: 15px;
  font-weight: 600;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background: #f5f5f5;
  }
  // if you put selectors in without the ampersand, they will refer to children of the component //
  .justifyStart {
    margin-left: 25px;
  }
  .justifyEnd {
    margin-right: 25px;
  }
`;

const LeaderboardBtn = (props) => {
  return (
    <Btn>
      <div className="justifyStart">{props.text}</div>
      <div className="justifyEnd">{props.score}</div>
    </Btn>
  );
};
export default LeaderboardBtn;
