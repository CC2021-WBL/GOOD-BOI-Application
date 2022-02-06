import CLASSES from '../Consts/classesConst';

// Function  translates exercise code (for example "3.1") into exersise description

const exerciseCode2string = (className, exerciseCode) => {
  const classObj = CLASSES.find((classObj) => classObj.name == className);
  const exercisesArr = classObj.exercises;

  const exerciseName = exercisesArr.find(
    (exercise) => exercise.codeName === exerciseCode,
  ).exerciseName;

  if (exerciseName !== undefined) {
    return exerciseName;
  } else return 'Exercise code was not recognized';
};

export default exerciseCode2string;
