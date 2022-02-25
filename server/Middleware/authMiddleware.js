/* eslint-disable no-unused-vars */

const { ROLE_NAME } = require('../../client/src/Consts/rolesConsts');
const Participant = require('../Model/Participant');

module.exports.isAdmin = (req, res, next) => {
  if (req.user.portalRoles.includes(ROLE_NAME.ADMIN)) {
    next();
  } else {
    res.status(401).json({ success: false, message: 'unauthorized' });
  }
};

module.exports.isManager = (req, res, next) => {
  if (req.user.portalRoles.includes(ROLE_NAME.MANAGER)) {
    next();
  } else {
    res.status(401).json({ success: false, message: 'unauthorized' });
  }
};

module.exports.isStaff = (req, res, next) => {
  if (req.user.portalRoles.includes(ROLE_NAME.STAFF)) {
    next();
  } else {
    res.status(401).json({ success: false, message: 'unauthorized' });
  }
};
