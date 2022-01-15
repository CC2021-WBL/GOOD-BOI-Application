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

const ClassCompetitorButton = ({ type, classInfo, competitorInfo }) => {
  const { name } = classInfo || [];
  const { index, nameOfCompetitor } = competitorInfo || [];

  return (
    <ClassCompetitorButtonWrapper>
      {type === 'class' && <>{name}</>}
      {type === 'competitor' && (
        <>
          {index + 1}. {nameOfCompetitor}
        </>
      )}
      <InButtonLabel
        type={type}
        classInfo={classInfo}
        competitorInfo={competitorInfo}
      />
    </ClassCompetitorButtonWrapper>
  );
};

ClassCompetitorButton.propTypes = {
  type: PropTypes.string,
  classInfo: PropTypes.object,
  competitorInfo: PropTypes.object,
};

export default ClassCompetitorButton;
