const penaltyScore = ({ result }) => {
  const penaltyArr = result.exercises.map((penalty) => {
    if (penalty.penalty) {
      return penalty.penalty;
    } else return 0;
  });
  const score = penaltyArr.reduce((acc, val) => {
    return acc + val;
  });
  return score;
};

export default penaltyScore;
