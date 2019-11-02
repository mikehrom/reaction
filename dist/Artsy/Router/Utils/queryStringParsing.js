"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryStringParsing = void 0;

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

require("core-js/modules/es6.string.trim");

require("core-js/modules/es6.number.constructor");

require("core-js/modules/es6.number.is-nan");

var _qs = _interopRequireDefault(require("qs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var parseValue = function parseValue(value) {
  var parsedValue = value; // If this is a string that can be coerced into a number, do it.

  if (!Number.isNaN(Number(value)) && typeof value === "string" && value.trim() !== "") {
    parsedValue = Number(value);
  } else if ( // If this is the case-insensitive string 'true' or 'false'
  value !== null && typeof value === "string" && (value.toLowerCase() === "true" || value.toLowerCase() === "false")) {
    parsedValue = value.toLowerCase() === "true";
  }

  return parsedValue;
};

var queryStringParsing = function queryStringParsing(urlStr) {
  var parsedArgs = _qs.default.parse(urlStr);

  return Object.entries(parsedArgs).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        field = _ref2[0],
        value = _ref2[1];

    return _objectSpread({}, acc, _defineProperty({}, field, parseValue(value)));
  }, {});
};

exports.queryStringParsing = queryStringParsing;
//# sourceMappingURL=queryStringParsing.js.map