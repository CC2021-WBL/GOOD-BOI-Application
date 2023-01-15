import { useMutation } from 'react-query';
import axios from 'axios';

const requestFunc = async (userData) => {
  const res = await axios.post('/api/users/register', userData);
  return res;
};

export default function useRegisterUser() {
  return useMutation((userData) => requestFunc(userData));
}
