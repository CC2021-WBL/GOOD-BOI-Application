import React from 'react';
import ClassCompetitorButton from '../../Molecules/ClassCompetitorButton';
import RANDOM_CONTEST from '../../Data/TestData/test-data-random-contest';

const ClassesPage = () => {
  return (
    <>
      {RANDOM_CONTEST.classes.map((classObject) => {
        const { obedienceClass, competitors, isCompleted } = classObject;
        const { id, name } = obedienceClass;

        return (
          <ClassCompetitorButton
            key={id}
            classInfo={{
              name,
              contestantsAmount: competitors.length,
              isCompleted,
            }}
          />
        );
      })}
    </>
  );
};

export default ClassesPage;
