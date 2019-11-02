"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUser = getUser;
exports.userHasLabFeature = userHasLabFeature;
exports.userIsAdmin = userIsAdmin;

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.regexp.split");

var _get = require("./get");

function getUser(user) {
  var _user = user;

  if (_user === undefined) {
    var id = process.env.USER_ID;
    var type = process.env.USER_TYPE || "User";
    var accessToken = process.env.USER_ACCESS_TOKEN;
    var labFeatures = process.env.USER_LAB_FEATURES;

    if (id && accessToken) {
      _user = {
        id: id,
        accessToken: accessToken,
        type: type
      };

      if (labFeatures) {
        _user.lab_features = labFeatures.split(",");
      }
    }
  }

  return _user;
}

function userHasLabFeature(user, featureName) {
  var lab_features = (0, _get.get)(user, function (u) {
    return u.lab_features;
  }, []);
  return lab_features.includes(featureName);
}

function userIsAdmin(user) {
  return user && user.type === "Admin" ? true : false;
}
//# sourceMappingURL=user.js.map