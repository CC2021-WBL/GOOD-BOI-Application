import React from 'react';
import classes from '../../Data/TestData/test-data-classes';

import ClassCompetitorButton from '../../Molecules/ClassCompetitorButton';

const ClassesPage = () => {
  return (
    <>
      {classes.map((e) => (
        <ClassCompetitorButton
          type="class"
          key={e.id}
          classNumber={e.classNumber}
          contestantsAmount={e.contestantsAmount}
          classCompleted={e.classCompleted}
        />
      ))}
    </>
  );
};

export default ClassesPage;
