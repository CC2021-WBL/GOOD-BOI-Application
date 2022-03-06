const checkLocationForNavRender = (pathname) => {
  const pathsWithNavMenu = [
    '/',
    '/not-found',
    '/login',
    '/register',
    '/contact-form',
    '/forgot',
    '/in-progress',
  ];

  const checkPath = (elem) => elem === pathname;

  return pathsWithNavMenu.some(checkPath);
};

export default checkLocationForNavRender;
