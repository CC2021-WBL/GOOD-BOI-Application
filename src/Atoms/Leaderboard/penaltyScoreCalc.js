import WYNIK_RANDOMOWEGO_PSA from '../../Data/Dummy-data/RandomDogResult';

// if array exists then
// create a new array with penalty scores only
const penaltyArr = WYNIK_RANDOMOWEGO_PSA.map((penalty) => {
  if (penalty.penalty) {
    return penalty.penalty;
  } else return 0;
});
// summ up the penalty scores
// eslint-disable-next-line no-unused-vars
export const penaltyScore = penaltyArr.reduce((acc, val) => {
  return acc + val;
});
