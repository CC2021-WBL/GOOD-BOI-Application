export const requestOptionsGET = {
  method: 'GET',
  redirect: 'follow',
};

export const genRequestOptionsPOST = (data) => {
  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    redirect: 'follow',
  };
};

export const genRequestOptionsPATCH = (data) => {
  return {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    redirect: 'follow',
  };
};
