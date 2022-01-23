import WYNIK_RANDOMOWEGO_PSA from '../../Data/Dummy-data/RandomDogResult';

//jesli istnieje to zlicz punkty penalty
// najpierw trzeba stworzyc nowa tablice z penalty
const penaltyArr = WYNIK_RANDOMOWEGO_PSA.map((penalty) => {
  if (penalty.penalty != undefined) {
    return penalty.penalty;
  } else return 0;
});
// zliczenie punktow ujemnych
// eslint-disable-next-line no-unused-vars
export const penaltyScore = penaltyArr.reduce((acc, val) => {
  return acc + val;
});
