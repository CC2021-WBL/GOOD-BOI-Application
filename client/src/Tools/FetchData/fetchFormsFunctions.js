import {
  genRequestOptionsPATCH,
  genRequestOptionsPOST,
} from './requestOptions';

export async function postApplication(body) {
  console.log(body);
  const res = await fetch(
    `/api/results/register/${body.participantId}`,
    genRequestOptionsPOST(body),
  );
  if (res.status === 201) {
    return true;
  } else if (res.status === 400) {
    alert('nieprawidłowe dane');
    return false;
  } else {
    alert('Nie udało się wysłać zgłoszenia');
    return false;
  }
}

export async function postDogForm(state, dogData, dogs, dogDispatch) {
  delete dogData._id;
  const res = await fetch(
    `/api/dogs/register/${state.userId}`,
    genRequestOptionsPOST(dogData),
  );
  if (res.status === 400) {
    alert('nieprawidłowe dane');
  } else if (res.status !== 201) {
    alert('Dodanie psa nieudane, spróbuj jeszcze raz');
    console.log(res.message);
  } else if (res.status === 201) {
    dogDispatch({
      type: 'UPDATE_ONE_FIELD',
      fieldName: 'dogs',
      payload: dogs.push({
        dogId: dogData._id,
        dogName: dogData.dogName,
      }),
    });
  }
}

export async function patchDogForm(
  initialStateOfDogForm,
  dogData,
  dogs,
  dogDispatch,
) {
  const res = await fetch(
    `/api/dogs/${initialStateOfDogForm._id}`,
    genRequestOptionsPATCH(dogData),
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
    dogDispatch({
      type: 'UPDATE_ONE_FIELD',
      fieldName: 'dogs',
      payload: dogs,
    });
  }
}
