export const getDataFormatDdMonthYyy = (date) => {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const properDate = date.toLocaleDateString(undefined, options);
  return properDate;
};

export const getDataFormatDdMmhYyy = (date) => {
  const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
  const properDate = date.toLocaleDateString(undefined, options);
  return properDate;
};
