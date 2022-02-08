/* eslint-disable no-unused-vars */
const validateData = (formData) => {
  const {
    dogName,
    kennelName,
    pkr,
    registrationNumber,
    breed,
    dateOfBirth,
    color,
    chipOrTattoo,
    sex,
    owner,
  } = formData;

  let errors = {};

  if (!dogName) {
    errors.dogName = 'Imię psa jest wymagany';
  } else if (dogName.length < 2) {
    errors.dogName = 'Imię musi mieć przynajmniej 2 znaki';
  }

  if (!kennelName) {
    errors.kennelName = 'Podaj przydomek lub wpisz "brak"';
  } else if (kennelName.length < 2) {
    errors.kennelName = 'Przydomek musi mieć przynajmniej 2 znaki';
  }

  if (!pkr) {
    errors.pkr = 'Podaj pkr lub wpisz "brak"';
  }

  if (!registrationNumber) {
    errors.registrationNumber =
      'Podaj numer rejestracji oddziałowej lub wpisz "brak"';
  }

  if (!breed) {
    errors.breed = 'Podaj pełną rasę psa lub wpisz "mix"';
  } else if (breed.length < 3) {
    errors.breed = 'Podaj pełną rasę psa, nie używaj skrótów';
  }

  if (!dateOfBirth) {
    errors.dateOfBirth = 'Podaj datę urodzenia psa';
  }

  if (!color) {
    errors.color = 'Podaj maść psa';
  } else if (color.length < 3) {
    errors.color = 'Podaj pełną nazwę maści psa';
  }

  if (!chipOrTattoo) {
    errors.chipOrTattoo = 'Podaj numer chip lub tatuaż';
  } else if (chipOrTattoo.length < 4) {
    errors.chipOrTattoo = 'Numer chip lub tatuaż musi mieć minimum 4 znaki';
  }

  if (!sex) {
    errors.sex = 'Podaj płeć psa';
  } else if (sex.length < 4) {
    errors.sex = 'Płeć psa: pies lub suka';
  }

  if (!owner) {
    errors.owner = 'Podaj imię i nazwisko właściciela psa';
  } else if (owner.length < 4) {
    errors.owner = 'Podaj pełne imię i nazwisko właściciela psa';
  }

  return errors;
};

export default validateData;
