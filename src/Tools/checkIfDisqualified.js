/* eslint-disable no-unused-vars */
const checkIfDisqualified = ({ result }) => {
  const isDisqualified = result.some((element) => element.disqualified);
  return isDisqualified;
};

export default checkIfDisqualified;
