import styled from "styled-components";
import InButtonLabel from "./InButtonLabel";

const ClassCompetitorButtonWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 4.375rem;
  margin: 1rem;
  padding: 1rem;
  color: #323F4B;
  font-family: Mulish;
  font-size: 1.25em;
  font-weight: 700;
  font-style: normal;
  line-height: 1.5rem;
  background: white;
  border: solid 1px #323F4B;
  border-radius: 0.75rem;
;
`;

const ClassCompetitorButton = (props) => {
  if (props.type === 'class'){
    return <ClassCompetitorButtonWrapper>
      Klasa {props.classNumber}
      <InButtonLabel type={props.type} contestantsAmount={props.contestantsAmount} exercisesAmount={props.exercisesAmount} exercisesCompleted={props.exercisesCompleted} completed={props.exercisesAmount === props.exercisesCompleted}/>
    </ClassCompetitorButtonWrapper>
  } else {
    return <ClassCompetitorButtonWrapper>
      1. {props.nameOfCompetitor}
    <InButtonLabel type={props.type} contestantsAmount={props.contestantsAmount} exercisesAmount={props.exercisesAmount} exercisesCompleted={props.exercisesCompleted} completed={props.exercisesAmount === props.exercisesCompleted}/>
  </ClassCompetitorButtonWrapper>;
  }
};

export default ClassCompetitorButton;
