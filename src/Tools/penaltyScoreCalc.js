const penaltyScore = ({ result }) => {
  if (result.specialState) return result.specialState;
  else {
    return 0;
  }
};

export default penaltyScore;
