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

export const getHourAndMinutesFromDate = (date = Date) => {
  const hour = date.getHours().toString();
  const minutes = date.getUTCMinutes().toString();
  console.log(minutes);
  if (minutes === '0') {
    return `${hour}:00`;
  }
  return `${hour}:${minutes}`;
};
