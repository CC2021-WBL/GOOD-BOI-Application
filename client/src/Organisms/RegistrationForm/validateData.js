const validateData = (formData) => {
  const {
    email,
    password,
    repeatpass,
    participantName,
    participantSurname,
    phoneNumber,
    address,
  } = formData;
  const { country, city, street, numberOfHouse, postalCode } = address;

  let errors = {};

  if (!email) {
    errors.email = 'Email jest wymagany';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Niepoprawny adres email';
  }

  if (!password) {
    errors.password = 'Hasło jest wymagane';
  } else if (password.length < 4) {
    errors.password = 'Hasło musi mieć więcej niż 4 znaki';
  }

  if (!repeatpass) {
    errors.repeatpass = 'Powtórz hasło';
  } else if (repeatpass.trim() !== password.trim()) {
    errors.repeatpass = 'Powtórzone hasło różni się';
  }

  if (!participantName.trim()) {
    errors.participantName = 'Imię jest wymagane';
  } else if (participantName.length < 2) {
    errors.participantName = 'Imię musi mieć więcej niż 2 znaki';
  }

  if (!participantSurname.trim()) {
    errors.participantSurname = 'Nazwisko jest wymagane';
  } else if (participantSurname.length < 4) {
    errors.participantSurname = 'Nazwisko musi mieć więcej niż 4 znaki';
  }

  if (!street) {
    errors.street = 'Podaj Ulicę';
  } else if (street.length < 4) {
    errors.street = 'Nazwa ulicy musi mieć więcej niż 4 znaki';
  }

  if (!numberOfHouse) {
    errors.numberOfHouse = 'Podaj Numer Domu';
  } else if (numberOfHouse.length <= 0) {
    errors.numberOfHouse = 'Nazwa ulicy musi mieć więcej znaków';
  }

  if (!postalCode) {
    errors.postalCode = 'Podaj Kod Pocztowy';
  } else if (postalCode.length < 4) {
    errors.postalCode = 'Kod pocztowy powinien mieć więcej niż 4 znaki';
  }

  if (!city) {
    errors.city = 'Podaj Miasto';
  } else if (city.length < 4) {
    errors.city = 'Nazwa miasta musi być dluższa niż 4 znaki';
  }

  if (!country) {
    errors.country = 'Podaj Kraj';
  } else if (country.length < 2) {
    errors.country = 'Nazwa kraju musi być dluższa niż 2 znaki';
  }
  if (!phoneNumber) {
    errors.phoneNumber = 'Podaj Numer Telefonu (Tylko cyfry)';
  } else if (phoneNumber.length < 9) {
    errors.phoneNumber = 'Podany numer jest za krótki';
  }

  return errors;
};

export default validateData;
