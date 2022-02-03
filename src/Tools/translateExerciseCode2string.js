import CLASSES from '../Consts/CLASSES';

// TODO: This file is a translator function for the LeaderboardList component.
// It will translate exercise code "3.1" into execsise description

const translateExerciseCode2string = (className, exerciseCode) => {
  const classObj = CLASSES.find((classObj) => classObj.name === className);
  console.log(
    'translate className: ' + className + ' exerciseCode: ' + exerciseCode,
  );
  const exercisesArr = classObj.exercises;

  const exerciseName = exercisesArr.find(
    (exercise) => exercise.codeName === exerciseCode,
  ).exerciseName;

  if (exerciseName !== undefined) {
    return exerciseName;
  } else return 'Exercise code was not recognized';
};

export default translateExerciseCode2string;
