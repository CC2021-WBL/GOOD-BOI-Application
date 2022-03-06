export const generateRequestOptionsForLogin = (data) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    email: data.email,
    password: data.password,
  });

  return {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
    credentials: 'include',
  };
};

export const requestOptionsGET = {
  method: 'GET',
  redirect: 'follow',
  credentials: 'include',
};
