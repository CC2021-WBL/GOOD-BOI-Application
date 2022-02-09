import toBeAnnounced from '../../Consts/toBeAnnounced';

export const renderAddressText = (address) => {
  const { street, numberOfHouse, city } = address;

  return [
    [
      `${street ? `${street} ${numberOfHouse}` : `Adres: ${toBeAnnounced}`}`,
      `${city ? `${city}` : `Miasto: ${toBeAnnounced}`}`,
    ],
  ];
};

export default renderAddressText;
