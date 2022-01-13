import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  width: 343px;
  height: 50px;
  color: black;
  background: transparent;
  border: none;
  border-bottom: 1px solid #9aa5b1;
  font-size: 15px;
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

const LeaderboardBtn = () => {
  return (
    <ButtonWrapper>
      <div className="justifyStart">nazwa ćwiczenia</div>
      <div className="justifyEnd">26</div>
    </ButtonWrapper>
  );
};

export default LeaderboardBtn;
