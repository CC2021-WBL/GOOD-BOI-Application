import { DOG_ACTIONS } from '../../Consts/reducersActions';
import { requestOptionsGET } from './requestOptions';

export async function getDogsNames(state, dogDispatch) {
  try {
    let response = await fetch(
      `/api/users/dogs/${state.userId}`,
      requestOptionsGET,
    );
    if (response.ok) {
      response = await response.json();

      dogDispatch({
        type: DOG_ACTIONS.SET_DATA,
        payload: { dogs: response.dogs, chosenDog: {} },
      });
      return response.dogs;
    } else {
      alert('Ooops! nie udało się pobrać danych z serwera');
    }
  } catch (error) {
    console.log(error);
  }
}
