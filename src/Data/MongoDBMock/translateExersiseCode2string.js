import exercises from '../../Consts/exercises';

// TODO: This file is a translator function for the LeaderboardList component.
// It will translate exersise code "3.1" into exersise description

const translateExersiseCode2string = (clasS, code) => {
  let className;
  const exersiseCode = code;
  const fakeClass = clasS;

  fakeClass === '3' && (className = 'class3');
  fakeClass === '2' && (className = 'class2');
  fakeClass === '1' && (className = 'class1');
  fakeClass === '0' && (className = 'class0');

  if (exercises[className][exersiseCode] !== undefined) {
    return exercises[className][exersiseCode];
  } else return 'code not recognized';
};

export default translateExersiseCode2string;
