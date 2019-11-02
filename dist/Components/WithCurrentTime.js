"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithCurrentTime = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

var _Artsy = require("../Artsy");

var _luxon = require("luxon");

var _react = require("react");

var _getCurrentTimeAsIsoString = require("../Utils/getCurrentTimeAsIsoString");

var _time = require("../Utils/time");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var WithCurrentTime = function WithCurrentTime(_ref) {
  var children = _ref.children,
      _ref$interval = _ref.interval,
      interval = _ref$interval === void 0 ? 1000 : _ref$interval,
      syncWithServer = _ref.syncWithServer;

  var _useSystemContext = (0, _Artsy.useSystemContext)(),
      relayEnvironment = _useSystemContext.relayEnvironment;

  var _useState = (0, _react.useState)((0, _getCurrentTimeAsIsoString.getCurrentTimeAsIsoString)()),
      _useState2 = _slicedToArray(_useState, 2),
      currentTime = _useState2[0],
      setCurrentTime = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      timeOffsetInMilliseconds = _useState4[0],
      setTimeOffsetInMilliseconds = _useState4[1];

  var intervalId;

  function updateCurrentTime() {
    setCurrentTime((0, _getCurrentTimeAsIsoString.getCurrentTimeAsIsoString)());
  }

  (0, _react.useEffect)(function () {
    if (syncWithServer) {
      (0, _time.getOffsetBetweenGravityClock)(relayEnvironment).then(function (offset) {
        setTimeOffsetInMilliseconds(offset);
      });
    }

    intervalId = setInterval(updateCurrentTime, interval || 1000);
    return function () {
      clearInterval(intervalId);
    };
  }, []);
  return children(_luxon.DateTime.fromISO(currentTime).minus({
    millisecond: timeOffsetInMilliseconds
  }).toString());
};

exports.WithCurrentTime = WithCurrentTime;
//# sourceMappingURL=WithCurrentTime.js.map