const validateData = (formData) => {
  let errors = {};

  if (!formData.email) {
    errors.email = 'Email jest wymagany';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
  ) {
    errors.email = 'Niepoprawny adres email';
  }

  if (!formData.password) {
    errors.password = 'Hasło jest wymagane';
  }

  if (formData.reapeatpass !== formData.password) {
    errors.repeatpass = 'Powtórzone hasło różni się';
  }

  if (!formData.firstname.trim()) {
    errors.firstname = 'Imię jest wymagane';
  }

  if (!formData.surname.trim()) {
    errors.surname = 'Nazwisko jest wymagane';
  }

  if (!formData.street) {
    errors.street = 'Podaj Ulicę';
  }
  if (!formData.zipcode) {
    errors.zipcode = 'Podaj Kod Pocztowy';
  }
  if (!formData.city) {
    errors.city = 'Podaj Miasto';
  }
  return errors;
};

export default validateData;
