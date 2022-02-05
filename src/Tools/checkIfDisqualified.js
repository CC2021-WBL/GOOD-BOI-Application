/* eslint-disable no-unused-vars */
const checkIfDisqualified = ({ result }) => {
  const isDisqualified = result.some((element) => element.specialState);
  return isDisqualified;
};

export default checkIfDisqualified;
