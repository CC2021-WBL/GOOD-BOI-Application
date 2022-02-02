import exercises from '../Consts/exercises';

// TODO: This file is a translator function for the LeaderboardList component.
// It will translate exercise code "3.1" into execsise description

const translateExerciseCode2string = (clasS, code) => {
  let className;
  const exerciseCode = code;
  const fakeClass = clasS;

  fakeClass === 'Klasa 3' && (className = 'class3');
  fakeClass === 'Klasa 2' && (className = 'class2');
  fakeClass === 'Klasa 1' && (className = 'class1');
  fakeClass === 'Klasa 0' && (className = 'class0');

  if (exercises[className][exerciseCode] !== undefined) {
    return exercises[className][exerciseCode];
  } else return 'code not recognized';
};

export default translateExerciseCode2string;
