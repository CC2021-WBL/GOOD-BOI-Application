export function removeNullsFromArray(array = []) {
  const filteredArray = array.filter((contest) => {
    return contest !== null;
  });

  return filteredArray;
}
