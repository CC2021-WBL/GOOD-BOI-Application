const passport = require('passport');
const { isDogOwner } = require('../Tools/autorizationAdditionalTools');

const ROLE_NAME = {
  PARTICIPANT: 'participant',
  STAFF: 'staff',
  MANAGER: 'manager',
  ADMIN: 'admin',
};

function checkUser(req) {
  if (req.user._id.valueOf() === req.params.userId) {
    return true;
  } else {
    return false;
  }
}

module.exports.auth = (req, res, next) => {
  console.log('auth');
  passport.authenticate('jwt', { session: false }, function (err, user, info) {
    if (err) {
      console.log(info);
      res.status(500).json({ success: false, message: 'authorization error' });
    } else if (!user) {
      req.access = 'public';
      return next();
    } else {
      console.log(req.user);
      return next();
    }
  })(req, res, next);
};

module.exports.justUserAndAdmin = (req, res, next) => {
  if (checkUser) {
    next();
  } else {
    this.isAdminStrict(req, res, next);
  }
};

module.exports.isAdminStrict = (req, res, next) => {
  if (req.user.portalRoles.includes(ROLE_NAME.ADMIN)) {
    next();
  } else {
    res.status(401).json({ success: false, message: 'unauthorized' });
  }
};

module.exports.isAdminOrPublic = (req, res, next) => {
  if (req.user.portalRoles.includes(ROLE_NAME.ADMIN)) {
    next();
  } else {
    req.access = 'public';
    next();
  }
};

module.exports.isManagerOrAdmin = (req, res, next) => {
  if (req.user.portalRoles.includes(ROLE_NAME.MANAGER)) {
    next();
  } else {
    this.isAdminStrict(req, res, next);
  }
};

module.exports.justUserStaffOrAdmin = (req, res, next) => {
  if (checkUser(req)) {
    next();
  } else if (req.user.portalRoles.includes(ROLE_NAME.STAFF)) {
    next();
  } else {
    this.isAdminStrict(req, res, next);
  }
};

module.exports.dogOwnerAllRolesOrPublic = (req, res, next) => {
  const isOwner = isDogOwner(req.user, req.params.dogId);
  if (isOwner) {
    next();
  } else if (req.user.portalRoles.includes(ROLE_NAME.STAFF)) {
    next();
  } else {
    this.isAdminOrPublic(req, res, next);
  }
};

module.exports.justDogOwnerStaffOrAdmin = (req, res, next) => {
  const isOwner = isDogOwner(req.user, req.params.dogId);
  if (isOwner) {
    next();
  } else if (req.user.portalRoles.includes(ROLE_NAME.STAFF)) {
    next();
  } else {
    this.isAdmin(req, res, next);
  }
};
