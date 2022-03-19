export function removeNullsFromArray(array = []) {
  let newArray = [];
  array.forEach((element) => {
    if (element !== null) {
      newArray.push(element);
    }
  });

  return newArray;
}
