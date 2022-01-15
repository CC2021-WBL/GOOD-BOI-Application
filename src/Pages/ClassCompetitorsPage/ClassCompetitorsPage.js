import React from 'react';
import ClassCompetitorButton from '../../Molecules/ClassCompetitorButton';
import RANDOM_CONTEST from '../../Data/TestData/test-data-random-contest';

const ClassCompetitorsPage = () => {
  return (
    <>
      {RANDOM_CONTEST.classes[0].competitors.map((competitor, index) => {
        const { nameOfCompetitor, exercisesCompleted, exercisesAmount } =
          competitor;
        return (
          <ClassCompetitorButton
            type="competitor"
            key={competitor.id}
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
