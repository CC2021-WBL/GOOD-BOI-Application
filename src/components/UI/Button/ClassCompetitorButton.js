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
  font-family: 'Mulish', sans-serif;
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
  const {type, classNumber, nameOfCompetitor, contestantsAmount, exercisesAmount, exercisesCompleted, no}=props;

    return <ClassCompetitorButtonWrapper>

      { type === 'class' && <>Klasa {classNumber}</> }
      { type === 'competitor' && <>{no}. {nameOfCompetitor}</> }

      <InButtonLabel type={type} contestantsAmount={contestantsAmount} exercisesAmount={exercisesAmount} exercisesCompleted={exercisesCompleted}/>

    </ClassCompetitorButtonWrapper>

};

export default ClassCompetitorButton;
