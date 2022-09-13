import { useQuery } from 'react-query';
import axios from 'axios';

export const fetchUserDataByJwt = async () => {
  const res = await axios.get('/api/users/jwt');
  return res.data;
};

export default function useUserDataByJwt(isAuthenticated) {
  const isEnabled = isAuthenticated ? false : true;
  return useQuery('user-jwt', () => fetchUserDataByJwt(), {
    enabled: isEnabled,
  });
}
