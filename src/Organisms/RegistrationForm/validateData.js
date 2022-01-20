const ERRORS = {
  email: {
    name: 'email',
    required: 'Email jest wymagany',
    invalid: 'Niepoprawny adres email',
  },
  password: {
    name: 'password',
    required: 'Hasło jest wymagane',
    invalid: 'Hasło musi mieć więcej niż 4 znaki',
    minLength: 4,
  },
  repeatpass: {
    name: 'repeatpass',
    required: 'Hasło jest wymagane',
    invalid: 'Powtórzone hasło różni się',
    minLength: 4,
  },
  firstname: {
    name: 'firstname',
    required: 'Imię jest wymagane',
    invalid: 'Imię musi mieć więcej niż 4 znaki',
    minLength: 4,
  },
  surname: {
    name: 'surname',
    required: 'Nazwisko jest wymagane',
    invalid: 'Nazwisko musi mieć więcej niż 4 znaki',
    minLength: 4,
  },
  street: {
    name: 'street',
    required: 'Ulica jest wymagana',
    invalid: 'Ulica musi mieć więcej niż 4 znaki',
    minLength: 4,
  },
  zipcode: {
    name: 'zipcode',
    required: 'Kod jest wymaganya',
    invalid: 'Kod musi mieć więcej niż 5 znaków',
    minLength: 5,
  },
  city: {
    name: 'city',
    required: 'Miasto jest wymagane',
    invalid: 'Miasto musi mieć więcej niż 3 znaków',
    minLength: 3,
  },
};

const validateData = (formData) => {
  let errors = {};
  const emailRgx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const validateInput = ([inputName, inputValue]) => {
    if (!inputValue) {
      errors[inputName] = ERRORS[inputName]['required'];
      return;
    }
    switch (inputName) {
      case ERRORS.email.name:
        if (!inputValue.match(emailRgx))
          errors[inputName] = ERRORS[inputName].invalid;
        break;
      case ERRORS.repeatpass.name:
        if (inputValue === formData[ERRORS.password.name])
          errors[inputName] = ERRORS[inputName].invalid;
        break;
      default:
        if (inputValue.length < ERRORS[inputName].minLength)
          errors[inputName] = ERRORS[inputName].invalid;
        break;
    }
  };

  const inputsKeys = Object.entries(formData);
  inputsKeys.forEach(([key, value]) => {
    validateInput([key, value.trim()]);
  });
  return errors;
};

export default validateData;
