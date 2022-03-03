const createUserInitialData = () => {
  const userData = {
    participantName: '',
    participantSurname: '',
    address: {
      country: '',
      city: '',
      street: '',
      numberOfHouse: '',
      postalCode: '',
    },
  };
  return userData;
};

export default createUserInitialData;
