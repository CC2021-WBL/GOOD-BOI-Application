import CLASSES from '../Consts/classesConst';

// Thie function returns the score of each exercise, based on factors given in test-data-classes

const calculateExerciseScore = (className, code) => {
  const objOfSelClass = CLASSES.find((element) => element.name == className);
  const objOfExerciseArr = objOfSelClass.exercises.find(
    (element) => element.codeName === code,
  );
  const FactorForSelCodeName = objOfExerciseArr.pointsFactor;
  return FactorForSelCodeName;
};
export default calculateExerciseScore;
