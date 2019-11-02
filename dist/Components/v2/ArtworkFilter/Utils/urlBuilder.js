"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeDefaultValues = exports.updateUrl = exports.buildUrl = void 0;

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es7.object.entries");

require("core-js/modules/es6.array.reduce");

var _isDefaultFilter = require("./isDefaultFilter");

var _qs = _interopRequireDefault(require("qs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var buildUrl = function buildUrl(state) {
  var params = removeDefaultValues(state);

  var queryString = _qs.default.stringify(params);

  var url = queryString ? "".concat(window.location.pathname, "?").concat(queryString) : window.location.pathname;
  return url;
};

exports.buildUrl = buildUrl;

var updateUrl = function updateUrl(state) {
  var url = buildUrl(state);

  if (typeof window !== "undefined") {
    window.history.replaceState({}, "", url);
  }
};

exports.updateUrl = updateUrl;

var removeDefaultValues = function removeDefaultValues(state) {
  return Object.entries(state).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if ((0, _isDefaultFilter.isDefaultFilter)(key, value)) {
      return acc;
    } else {
      return _objectSpread({}, acc, _defineProperty({}, key, value));
    }
  }, {});
};

exports.removeDefaultValues = removeDefaultValues;
//# sourceMappingURL=urlBuilder.js.map