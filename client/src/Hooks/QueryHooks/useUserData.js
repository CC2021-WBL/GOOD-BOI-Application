import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUserData = async (currentUserId) => {
  const res = await axios.get(`/api/users/${currentUserId}`); //TODO: do ?taker=profile dodać email, hasło nr tel i inne potrzebne dane
  return res.data;
};

export default function useUserData(currentUserId, isEnabled) {
  // const isEnabled = currentUserId ? true : false;
  return useQuery('user-data', () => fetchUserData(currentUserId), {
    enabled: isEnabled,
  });
}
