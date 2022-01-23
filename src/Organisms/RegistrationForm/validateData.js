const validateData = (formData) => {
  const {
    email,
    password,
    repeatpass,
    firstname,
    surname,
    street,
    city,
    zipcode,
  } = formData;

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

  if (repeatpass.trim() !== password.trim()) {
    errors.repeatpass = 'Powtórzone hasło różni się';
  }

  if (!firstname.trim()) {
    errors.firstname = 'Imię jest wymagane';
  } else if (firstname.length < 4) {
    errors.firstname = 'Imię musi mieć więcej niż 4 znaki';
  }

  if (!surname.trim()) {
    errors.surname = 'Nazwisko jest wymagane';
  } else if (surname.length < 4) {
    errors.surname = 'Nazwisko musi mieć więcej niż 4 znaki';
  }

  if (!street) {
    errors.street = 'Podaj Ulicę';
  } else if (street.length < 4) {
    errors.street = 'Nazwa ulicy musi mieć więcej niż 4 znaki';
  }

  if (!zipcode) {
    errors.zipcode = 'Podaj Kod Pocztowy';
  } else if (zipcode.length < 4) {
    errors.zipcode = 'Kod pocztowy powinien mieć więcej niż 4 znaki';
  }

  if (!city) {
    errors.city = 'Podaj Miasto';
  } else if (city.length < 4) {
    errors.city = 'Nazwa miasta musi być dluższa niż 4 znaki';
  }

  return errors;
};

export default validateData;
