import { useQuery } from 'react-query';
import axios from 'axios';

export const fetchUserDogs = async (currentUserId) => {
  const res = await axios.get(`/api/users/dogs/${currentUserId}`);
  return res.data;
};

export default function useUserDogs(currentUserId, isEnabled) {
  if (!currentUserId) {
    isEnabled = false;
  }
  return useQuery('user-dogs', () => fetchUserDogs(currentUserId), {
    enabled: isEnabled,
  });
}
