const ROLE_NAME = require('../Consts/roles');

module.exports.isDogOwner = (user, dogId) => {
  let isOwner = false;
  user.dogs.forEach((dogObject) => {
    console.log(JSON.stringify(dogObject.dogId.valueOf()));
    console.log(JSON.stringify(dogId));
    if (JSON.stringify(dogObject.dogId.valueOf()) === JSON.stringify(dogId)) {
      isOwner = true;
    }
  });

  return isOwner;
};

module.exports.checkUser = (req) => {
  if (req.user && req.user._id.valueOf() === req.params.userId) {
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
