const checkLocationForNavRender = (pathname, isAuthorized) => {
  const pathsWithNavMenu = [
    '/not-found',
    '/login',
    '/register',
    '/contact-form',
    '/forgot',
    '/in-progress',
  ];

  if (!isAuthorized) {
    pathsWithNavMenu.push('/');
  }

  const checkPath = (elem) => elem === pathname;

  return pathsWithNavMenu.some(checkPath);
};

export default checkLocationForNavRender;

//send build
