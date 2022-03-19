function checkContestAndCurrentClassExist(req, contest) {
  if (!contest) {
    return false;
  }

  const obedienceClass = contest.obedienceClasses.find(
    (obedienceClass) => obedienceClass.classNumber == req.body.obedienceClass,
  );
  if (!obedienceClass) {
    return false;
  }
  return true;
}
module.exports = {
  checkContestAndCurrentClassExist,
};
