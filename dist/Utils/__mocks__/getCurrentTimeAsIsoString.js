"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__advance = __advance;
exports.__reset = __reset;
exports.__setCurrentTime = __setCurrentTime;
exports.getCurrentTimeAsIsoString = void 0;

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

var _luxon = require("luxon");

var baseTime = "2018-12-05T13:47:16.446Z";
var now = baseTime;

function __advance(ms) {
  now = _luxon.DateTime.fromISO(now).plus({
    milliseconds: ms
  }).toString();
}

function __reset() {
  now = baseTime;
}

function __setCurrentTime(time) {
  now = time;
}

var getCurrentTimeAsIsoString = jest.fn(function () {
  return now;
});
exports.getCurrentTimeAsIsoString = getCurrentTimeAsIsoString;
//# sourceMappingURL=getCurrentTimeAsIsoString.js.map