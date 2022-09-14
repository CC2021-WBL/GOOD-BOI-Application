import { genRequestOptionsPOST } from './requestOptions';
import axios from 'axios';

export async function postApplication(body) {
  const res = await fetch(
    `/api/results/register/${body.participantId}`,
    genRequestOptionsPOST(body),
  );
  if (res.status === 201) {
    return true;
  } else if (res.status === 400) {
    alert('nieprawidłowe dane');
    return false;
  } else if (res.status === 409) {
    alert('Pies już jest zgłoszony na dane zawody');
    return false;
  } else {
    alert('Nie udało się wysłać zgłoszenia');
    return false;
  }
}

export async function postDogForm(state, dogData, dogs, setDogs) {
  delete dogData._id;
  const res = await fetch(
    `/api/dogs/register/${state.userId}`,
    genRequestOptionsPOST(dogData),
  );
  if (res.status === 400) {
    alert('Nieprawidłowe dane');
  } else if (res.status !== 201) {
    alert('Dodanie psa nieudane, spróbuj jeszcze raz');
  } else if (res.status === 201) {
    setDogs((prevState) => {
      return [
        {
          dogId: dogData._id,
          dogName: dogData.dogName,
        },
        ...prevState,
      ];
    });
  }
}

export async function patchDogForm(
  initialStateOfDogForm,
  dogData,
  dogs,
  setDogs,
) {
  const res = await axios.patch(
    `/api/dogs/${initialStateOfDogForm._id}`,
    dogData,
  );
  if (res.status === 400) {
    alert('nieprawidłowe dane');
  } else if (res.status === 204) {
    alert('dane aktualne, nie trzeba aktualizować');
  } else if (res.status !== 201) {
    alert('Aktualizacja danych nieudana, spróbuj jeszcze raz');
    console.log(res.message);
  } else if (res.status === 201) {
    dogs.forEach((element) => {
      if (element.dogId === initialStateOfDogForm._id) {
        element.dogName = dogData.dogName;
      }
    });
    setDogs((prevState) => {
      return dogs;
    });
  }
}
