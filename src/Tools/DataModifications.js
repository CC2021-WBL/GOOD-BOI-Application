export const getAmountOfCompetingDoggos = (obedienceClasses) => {
  const doggoArrays = Object.values(obedienceClasses);
  let doggoAmount = 0;
  doggoArrays.forEach((element) => {
    doggoAmount += element.length;
  });
  return doggoAmount;
};
