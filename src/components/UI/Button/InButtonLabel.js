import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LabelWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.375rem;
  height: 1.25rem;
  font-family: 'Mulish', sans-serif;
  font-size: 0.7em;
  font-style: normal;
  font-weight: 400;
  border: solid 1px #323f4b;
  border-radius: 0.25rem;
  line-height: 1em;
  ${(props) =>
    props.classCompleted || props.exerciseCompleted
      ? `background: #97E3B3; color: #1A6234;  border: solid 1px #1A6234;`
      : `background: transparent`};
`;

const InButtonLabel = (props) => {
  const {
    type,
    classCompleted,
    contestantsAmount,
    exercisesAmount,
    exercisesCompleted,
  } = props;

  const exercisesComplete =
    exercisesAmount !== undefined && exercisesCompleted === exercisesAmount;

  return (
    <LabelWrapper
      classCompleted={classCompleted}
      exerciseCompleted={exercisesComplete}
    >
      {type === 'class' && classCompleted && <>ukończono</>}
      {type === 'class' && !classCompleted && (
        <>
          {contestantsAmount}{' '}
          {contestantsAmount === 1 ? `uczestnik` : `uczestników`}
        </>
      )}
      {type === 'competitor' && (
        <>
          {exercisesCompleted}/{exercisesAmount} ćwiczeń
        </>
      )}
    </LabelWrapper>
  );
};

InButtonLabel.propTypes = {
  type: PropTypes.string,
  classCompleted: PropTypes.bool,
  contestantsAmount: PropTypes.number,
  exercisesCompleted: PropTypes.number,
  exercisesAmount: PropTypes.number,
};

export default InButtonLabel;
