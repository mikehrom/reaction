"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Person = void 0;

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

var _react = _interopRequireDefault(require("react"));

var _reactHead = require("react-head");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Person = function Person(_ref) {
  var data = _ref.data;
  return _react.default.createElement(_reactHead.Meta, {
    tag: "script",
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(_objectSpread({
        "@context": "http://schema.org",
        "@type": "Person"
      }, data))
    }
  });
};

exports.Person = Person;
//# sourceMappingURL=Person.js.map