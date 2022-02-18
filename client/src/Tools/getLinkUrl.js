export const getLinkUrl = (userId, role) => {
  switch (role) {
    case 'participant':
      return `/user/${userId}`;
    case 'staff':
      return `/contests`;
    case 'manager':
      return `/contests`;
    default:
      return '/';
  }
};
