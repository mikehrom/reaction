"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentTimeAsIsoString = void 0;

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

var _luxon = require("luxon");

var getCurrentTimeAsIsoString = function getCurrentTimeAsIsoString() {
  return _luxon.DateTime.local().toString();
};

exports.getCurrentTimeAsIsoString = getCurrentTimeAsIsoString;
//# sourceMappingURL=getCurrentTimeAsIsoString.js.map