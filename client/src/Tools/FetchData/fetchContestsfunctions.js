import { requestOptionsGET } from './requestOptions';

export async function getContestsCards(taker) {
  let url = '/api/contests/card/data';
  if (taker) {
    url = `/api/contests/card/data?taker=${taker}`;
  }
  console.log(url);

  const response = await fetch(url, requestOptionsGET);
  if (response.status === 200) {
    const result = await response.json();
    return result;
  } else {
    return null;
  }
}
