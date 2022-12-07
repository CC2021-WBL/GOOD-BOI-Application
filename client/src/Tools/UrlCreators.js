import { ROLE_NAME } from '../Consts/rolesConsts';

export const createURLForRolePage = (role, userId) => {
  let url = '';
  switch (role) {
    case ROLE_NAME.PARTICIPANT:
      url = `/user/${userId}`;
      break;
    case ROLE_NAME.STAFF:
      url = '/contests';
      break;
    case ROLE_NAME.MANAGER:
      url = '/contests';
      break;
    default:
      url = '/pagenotfound';
  }

  return url;
};
