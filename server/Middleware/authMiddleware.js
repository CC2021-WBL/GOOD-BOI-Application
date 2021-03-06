const passport = require('passport');
const {
  isDogOwner,
  checkUser,
  isManager,
  isStaff,
} = require('../Tools/autorizationAdditionalTools');
const ROLE_NAME = require('../Consts/roles');

module.exports.auth = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, function (err, user, info) {
    if (err) {
      res.status(500).json({ success: false, message: info });
    } else if (!user) {
      req.access = 'public';
      return next();
    } else {
      req.user = user;
      return next();
    }
  })(req, res, next);
};

module.exports.blockIfPublic = (req, res, next) => {
  if (req.access === 'public' || !req.user) {
    res.status(401).json({ success: false, message: 'unauthorized' });
  } else {
    next();
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

module.exports.isUserOrAdmin = (req, res, next) => {
  if (checkUser(req)) {
    next();
  } else {
    this.isAdminStrict(req, res, next);
  }
};

module.exports.isManagerOrAdmin = (req, res, next) => {
  if (isManager(req)) {
    next();
  } else {
    this.isAdminStrict(req, res, next);
  }
};

module.exports.isUserStaffOrAdmin = (req, res, next) => {
  if (checkUser(req) || isStaff(req)) {
    next();
  } else {
    this.isAdminStrict(req, res, next);
  }
};

module.exports.isStaffManagerOrAdmin = (req, res, next) => {
  if (isStaff(req) || isManager(req)) {
    next();
  } else {
    this.isAdminStrict(req, res, next);
  }
};

module.exports.isDogOwnerAllRolesOrPublic = (req, res, next) => {
  if (!req.user) {
    req.access = 'public';
    next();
  } else if (isDogOwner(req.user, req.params.dogId) || isStaff(req)) {
    next();
  } else {
    this.isAdminOrPublic(req, res, next);
  }
};

module.exports.isDogOwnerStaffOrAdmin = (req, res, next) => {
  if (isDogOwner(req.user, req.params.dogId) || isStaff(req)) {
    next();
  } else {
    this.isAdminStrict(req, res, next);
  }
};

module.exports.isDogOwnerOrAdmin = (req, res, next) => {
  if (isDogOwner(req.user, req.params.dogId)) {
    next();
  } else {
    this.isAdminStrict(req, res, next);
  }
};
