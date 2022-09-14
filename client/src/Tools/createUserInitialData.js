const createUserInitialData = (userData = {}) => {
  const userInitialData = {
    participantName: userData.participantName || '',
    participantSurname: userData.participantSurname || '',
    address: {
      country: userData.address.country || 'Poland',
      city: userData.address.city || 'City Name',
      street: userData.address.street || 'Street',
      numberOfHouse: userData.address.numberOfHouse || '00',
      postalCode: userData.address.postalCode || '00-000',
    },
  };
  return userInitialData;
};

export default createUserInitialData;
