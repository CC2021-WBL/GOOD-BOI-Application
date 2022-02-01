import CLASSES from '../Data/Dummy-data/test-data-classes';

// Thie function calculates the score of each exersise, based on factors given in test-data-classes
// Input class as string '1', '2', '3', and code as string '0.1', '0.2' etc.

const calculateExersiseScore = (clasS, code) => {
  // znajdz obiekt w klasie clasS
  let className = clasS;
  clasS === '3' && (className = 'Klasa 3');
  clasS === '2' && (className = 'Klasa 2');
  clasS === '1' && (className = 'Klasa 1');
  clasS === '0' && (className = 'Klasa 0');

  const objOfSelClass = CLASSES.find((element) => element.name === className);
  const objOfExersiseArr = objOfSelClass.exersises.find(
    (element) => element.codeName === code,
  );
  const FactorForSelCodeName = objOfExersiseArr.pointsFactor;
  return FactorForSelCodeName;
};
export default calculateExersiseScore;

calculateExersiseScore('0', '0.8');
