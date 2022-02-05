const checkIfDisqualified = ({ result }) => {
  if (result.specialState === 'dyskwalifikacja') return true;
  else return false;
};

export default checkIfDisqualified;
