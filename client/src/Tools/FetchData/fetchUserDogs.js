import { DOG_ACTIONS } from '../../Consts/reducersActions';
import axios from 'axios'

export async function getDogsNames(state, dogDispatch) {
  try {
    axios.get(`/api/users/dogs/${state.userId}`).then(response => {
      console.log(response)
      if (response.status === 200) {
  
        dogDispatch({
          type: DOG_ACTIONS.SET_DATA,
          payload: { dogs: response.data.dogs, chosenDog: {} },
        });
        return response.data.dogs;
      } else {
        alert('Ooops! nie udało się pobrać danych z serwera');
      }
    })
  } catch (error) {
    console.log(error);
  }
}
