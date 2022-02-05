const penaltyScore = ({ result }) => {
  if (result.penaltyPoints) return result.penaltyPoints;
  else {
    return 0;
  }
};

export default penaltyScore;
