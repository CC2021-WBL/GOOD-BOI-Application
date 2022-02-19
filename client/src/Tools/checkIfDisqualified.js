const checkIfDisqualified = ({ result }) => {
  if (result.specialState === 'dyskwalifikacja' || result.specialState < -10)
    return true;
  else return false;
};

export default checkIfDisqualified;
