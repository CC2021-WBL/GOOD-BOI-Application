import { ROLE_NAME } from '../../Consts/rolesConsts';
import { genRequestOptionsPATCH, requestOptionsGET } from './requestOptions';
import { generateErrorMessage } from '../../Tools/generateErrorMessage';

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
  }
}

export async function fetchContestsForLandingPage() {
  let response = await fetch(
    '/api/contests/card/data?taker=landing',
    requestOptionsGET,
  );
  if (response.status === 200) {
    response = await response.json();
    return response;
  } else {
    throw Error(generateErrorMessage(response.status));
  }
}

export async function finishClass(contestId, classNumber) {
  try {
    let response = await fetch(
      `/api/contests/${contestId}/${classNumber}`,
      genRequestOptionsPATCH({}),
    );
    if (response.status === 201) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    alert('oops, coś poszło nie tak');
  }
}

export async function getExercisesPoints(dogId, contestId) {
  let response = await fetch(
    `/api/results/individual/bydog/${dogId}/${contestId}`,
    requestOptionsGET,
  );
  if (response.status === 200) {
    const resultDoc = await response.json();
    return resultDoc[0];
  } else {
    throw Error(generateErrorMessage(response.status));
  }
}

export async function updateExercisesPoints(resultsId, dataToUpdate) {
  try {
    let response = await fetch(
      `/api/results/${resultsId}`,
      genRequestOptionsPATCH(dataToUpdate),
    );
    if (response.status === 201) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    alert('Oops, coś poszło nie tak');
  }
}

export async function getResultsForClassInContest(contestId, classId) {
  try {
    let response = await fetch(`/api/results/general/${contestId}/${classId}`);
    if (response.status === 200) {
      const results = await response.json();
      console.log(results);
      return results;
    } else {
      return null;
    }
  } catch (error) {
    alert('Oops, coś poszło nie tak');
  }
}
