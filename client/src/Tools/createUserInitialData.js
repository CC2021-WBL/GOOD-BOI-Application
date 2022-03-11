const createUserInitialData = (state = {}) => {
  let participantName = '';
  let participantSurname = '';

  if (state) {
    participantName = state.userName;
    participantSurname = state.userSurname;
  }

  const userData = {
    participantName: participantName,
    participantSurname: participantSurname,
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
