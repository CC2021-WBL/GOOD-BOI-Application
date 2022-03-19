import { USER_ACTIONS } from '../../Consts/reducersActions';
import { genRequestOptionsPOST } from './requestOptions';

export async function loginUser(data, dispatch, navigate) {
  try {
    const response = await fetch(
      '/api/users/login',
      genRequestOptionsPOST(data),
    );
    if (response.status === 200) {
      const result = await response.json();

      dispatch({
        type: USER_ACTIONS.LOG_IN,
        payload: {
          userId: result.user.userId,
          userName: result.user.userName,
          userSurname: result.user.userSurname,
          roles: result.user.roles,
        },
      });
      navigate('/role');
    } else if (response.status === 401) {
      alert('Nieprawidłowe hasło');
    } else if (response.status === 404) {
      alert('Nieprawidłowy adres email');
    } else {
      alert('Ooops, coś poszło nie tak, spróbuj ponownie');
    }
  } catch (error) {
    console.log(error);
    navigate('/');
  }
}
