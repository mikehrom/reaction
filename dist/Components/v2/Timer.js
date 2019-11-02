"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timer = void 0;

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es7.string.pad-start");

var _palette = require("@artsy/palette");

var _WithCurrentTime = require("../WithCurrentTime");

var _luxon = require("luxon");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function padWithZero(num) {
  return num.toString().padStart(2, "0");
}

var SEPARATOR = _react.default.createElement(_react.default.Fragment, null, "\xA0\xA0");

var Timer = function Timer(_ref) {
  var endDate = _ref.endDate,
      labelWithTimeRemaining = _ref.labelWithTimeRemaining,
      labelWithoutTimeRemaining = _ref.labelWithoutTimeRemaining;
  return _react.default.createElement(_WithCurrentTime.WithCurrentTime, {
    syncWithServer: true
  }, function (currentTime) {
    var duration = _luxon.Duration.fromISO(_luxon.DateTime.fromISO(endDate).diff(_luxon.DateTime.fromISO(currentTime)).toString());

    var hasEnded = Math.floor(duration.seconds) <= 0;
    return _react.default.createElement(_palette.Flex, {
      flexDirection: "column",
      alignItems: "center"
    }, _react.default.createElement(_palette.Sans, {
      size: "4t",
      weight: "medium"
    }, padWithZero(Math.max(0, Math.floor(duration.as("days")))), "d", SEPARATOR, padWithZero(Math.max(0, Math.floor(duration.as("hours") % 24))), "h", SEPARATOR, padWithZero(Math.max(0, Math.floor(duration.as("minutes") % 60))), "m", SEPARATOR, padWithZero(Math.max(0, Math.floor(duration.as("seconds") % 60))), "s"), (labelWithTimeRemaining || labelWithoutTimeRemaining) && _react.default.createElement(_palette.Sans, {
      size: "3",
      weight: "medium"
    }, hasEnded ? labelWithoutTimeRemaining : labelWithTimeRemaining));
  });
};

exports.Timer = Timer;
//# sourceMappingURL=Timer.js.map