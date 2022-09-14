const enterCompetitionAddClass = (state) => {
  if (state.contestId !== null) {
    return '-enter-competition';
  } else if (state.chosenDog.dogId !== null) {
    return '';
  } else {
    return '';
  }
};

export default enterCompetitionAddClass;
