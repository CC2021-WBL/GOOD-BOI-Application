import React from 'react';
<<<<<<< HEAD
import NavFooterBtn from '../../Atoms/NavFooterBtn/NavFooterBtnStyled';

const ClassesPage = () => {
  return (
    <div>
      <h1>I am a Classes Page Component</h1>
      <NavFooterBtn />
      <NavFooterBtn text="iuh" active />
      <NavFooterBtn text="iuh" active />
    </div>
=======
import ClassOrDogButton from '../../Molecules/ClassCompetitorButton/ClassOrDogButton';
import RANDOM_CONTEST from '../../Data/TestData/test-data-random-contest';

const ClassesPage = () => {
  return (
    <>
      {RANDOM_CONTEST.obedienceClasses.map((classObject) => {
        const { obedienceClass, dogs, isCompleted } = classObject;
        const { id, name } = obedienceClass;

        return (
          <ClassOrDogButton
            key={id}
            classInfo={{
              name,
              dogsAmount: dogs.length,
              isCompleted,
            }}
          />
        );
      })}
    </>
>>>>>>> development
  );
};

export default ClassesPage;
