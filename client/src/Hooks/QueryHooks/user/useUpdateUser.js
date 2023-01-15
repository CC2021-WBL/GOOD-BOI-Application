import { useMutation } from 'react-query';
import axios from 'axios';

const requestFunc = async (userId, userData) => {
  const res = await axios.patch(`/api/users/${userId}`, userData);
  return res;
};

export default function useUpdateUser() {
  return useMutation(({ userId, userData }) => requestFunc(userId, userData));
}
