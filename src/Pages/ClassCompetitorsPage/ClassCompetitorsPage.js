import React from 'react';
import ClassCompetitorButton from '../../Molecules/ClassCompetitorButton';
import RANDOM_CONTEST from '../../Data/TestData/test-data-random-contest';

const ClassCompetitorsPage = () => {
  return (
    <>
      {RANDOM_CONTEST.classes[0].competitors.map((competitor, index) => {
        const { id, nameOfCompetitor, exercisesCompleted, exercisesAmount } =
          competitor;
        return (
          <ClassCompetitorButton
            key={id}
            competitorInfo={{
              index,
              nameOfCompetitor,
              exercisesCompleted,
              exercisesAmount,
            }}
          />
        );
      })}
    </>
  );
};

export default ClassCompetitorsPage;
