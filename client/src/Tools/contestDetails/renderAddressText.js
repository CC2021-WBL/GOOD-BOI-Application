import toBeAnnounced from '../../Consts/toBeAnnounced';

export const renderAddressText = (address) => {
  const { street, numberOfHouse, city } = address;
  let streetDetails = null;
  if (street && numberOfHouse) {
    streetDetails = `${street} ${numberOfHouse}`;
  } else if (street) {
    streetDetails = street;
  } else {
    streetDetails = toBeAnnounced;
  }

  return [
    [`${streetDetails}`, `${city ? `${city}` : `Miasto: ${toBeAnnounced}`}`],
  ];
};

export default renderAddressText;
