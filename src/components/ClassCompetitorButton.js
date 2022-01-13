import styled from "styled-components";

const ClassCompetitorButtonWrapper = styled.div`
  width: 343px;
  height: 70px;
  color: #323F4B;
  font-size: 20px;
  font-weight: 700;
  background: white;
  border: solid 0.5px #323F4B;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 25px
;
`;

const ContestantsNumberWrapper = styled.div`
  width: 120px;
  height: 20px;
  font-size: 14px;
  font-weight: 4600;
  background: #ACCCF8;
  border: solid 0.5px #323F4B;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClassCompetitorButton = (props) => {
    return <ClassCompetitorButtonWrapper>
    Class {props.classNumber}
    <ContestantsNumberWrapper>
      {props.contestantsAmount} contestants
    </ContestantsNumberWrapper>
  </ClassCompetitorButtonWrapper>;
};

export default ClassCompetitorButton;
