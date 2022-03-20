const { ROLE_NAME } = require('../Consts/roles');

module.exports.isDogOwner = (user, dogId) => {
  let isOwner = false;
  user.dogs.forEach((dogObject) => {
    if (JSON.stringify(dogObject.dogId.valueOf()) === JSON.stringify(dogId)) {
      isOwner = true;
    }
  });

  return isOwner;
};

module.exports.checkUser = (req) => {
  if (
    req.user &&
    JSON.stringify(req.user._id.valueOf()) === JSON.stringify(req.params.userId)
  ) {
    return true;
  } else {
    return false;
  }
};

module.exports.isManager = (req) => {
  if (req.user && req.user.portalRoles.includes(ROLE_NAME.MANAGER)) {
    return true;
  } else {
    return false;
  }
};

module.exports.isStaff = (req) => {
  if (req.user && req.user.portalRoles.includes(ROLE_NAME.STAFF)) {
    return true;
  } else {
    return false;
  }
};
