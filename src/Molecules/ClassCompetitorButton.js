import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InButtonLabel from '../Atoms/InButtonLabel';

const ClassCompetitorButtonWrapper = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 4.375rem;
  width: calc(100% - 2rem);
  margin: 1rem;
  padding: 1rem;
  color: #323f4b;
  font-family: 'Mulish', sans-serif;
  font-size: 1.25em;
  font-weight: 700;
  font-style: normal;
  line-height: 1.5rem;
  background: white;
  border: solid 1px #323f4b;
  border-radius: 0.75rem; ;
`;

const ClassCompetitorButton = (props) => {
  const {
    type,
    classNumber,
    classCompleted,
    contestantsAmount,
    no,
    nameOfCompetitor,
    exercisesCompleted,
    exercisesAmount,
  } = props;

  return (
    <ClassCompetitorButtonWrapper>
      {type === 'class' && <>Klasa {classNumber}</>}
      {type === 'competitor' && (
        <>
          {no}. {nameOfCompetitor}
        </>
      )}

      <InButtonLabel
        type={type}
        classCompleted={classCompleted}
        contestantsAmount={contestantsAmount}
        exercisesCompleted={exercisesCompleted}
        exercisesAmount={exercisesAmount}
      />
    </ClassCompetitorButtonWrapper>
  );
};

ClassCompetitorButton.propTypes = {
  type: PropTypes.string,
  classNumber: PropTypes.number,
  classCompleted: PropTypes.bool,
  no: PropTypes.number,
  nameOfCompetitor: PropTypes.string,
  contestantsAmount: PropTypes.number,
  exercisesCompleted: PropTypes.number,
  exercisesAmount: PropTypes.number,
};

export default ClassCompetitorButton;
