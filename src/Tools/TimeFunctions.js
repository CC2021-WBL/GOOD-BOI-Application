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
  if (minutes === '0') {
    return `${hour}:00`;
  }
  return `${hour}:${minutes}`;
};

export const getPointOnTimeLine = (startDate, endDate) => {
  const todayDate = new Date();
  if (endDate < todayDate) {
    return 'archiwalny';
  } else if (todayDate >= startDate && todayDate <= endDate) {
    return 'w trakcie';
  } else if (startDate > todayDate) {
    return 'nadchodzący';
  }
  return 'loading...';
};
