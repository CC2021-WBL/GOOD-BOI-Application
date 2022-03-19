import { ROLE_NAME } from '../../Consts/rolesConsts';
import { requestOptionsGET } from './requestOptions';

export async function getContestsCards(userStateFromContext, locationPath) {
  let url = '/api/contests/card/data';

  if (
    userStateFromContext.selectedRole === ROLE_NAME.PARTICIPANT &&
    locationPath.state &&
    locationPath.state.contestContent !== 'future'
  ) {
    url = `/api/contests/card/data?taker=${ROLE_NAME.PARTICIPANT}`;
  } else if (userStateFromContext.selectedRole === ROLE_NAME.MANAGER) {
    url = `/api/contests/card/data?taker=${ROLE_NAME.MANAGER}`;
  } else if (userStateFromContext.selectedRole === ROLE_NAME.STAFF) {
    url = `/api/contests/card/data?taker=${ROLE_NAME.STAFF}`;
  }

  try {
    const response = await fetch(url, requestOptionsGET);
    if (response.status === 200) {
      const result = await response.json();
      return result;
    } else {
      return null;
    }
  } catch (error) {
    alert('Ooops, coś poszło nie tak, spróbuj ponownie za chwilę');
    //will be returned info to render error page component
  }
}

export async function fetchContestsForLandingPage() {
  try {
    let response = await fetch(
      '/api/contests/card/data?taker=landing',
      requestOptionsGET,
    );
    if (response.status === 200) {
      response = await response.json();
      return response;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    alert('Ooops, cos poszło nie tak');
  }
}
