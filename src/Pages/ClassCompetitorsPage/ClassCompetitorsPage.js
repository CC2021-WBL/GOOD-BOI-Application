import React from 'react';
import ClassCompetitorButton from '../../Molecules/ClassCompetitorButton';
import competitors from '../../Data/TestData/test-data-competitor';

const ClassCompetitorsPage = () => {
  return (
    <>
      {competitors.map((e, index) => (
        <ClassCompetitorButton
          type="competitor"
          key={e.id}
          no={index + 1}
          nameOfCompetitor={e.nameOfCompetitor}
          exercisesCompleted={e.exercisesCompleted}
          exercisesAmount={e.exercisesAmount}
        />
      ))}
    </>
  );
};

export default ClassCompetitorsPage;
