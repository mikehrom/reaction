"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Helpers = require("./Helpers");

var _Mixins = require("./Mixins");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @deprecated in favor of our Design System TextArea component in @artsy/palette
 * https://palette.artsy.net/elements/inputs/textarea
 */
var TextArea = function TextArea(props) {
  var newProps = _objectSpread({}, props);

  delete newProps.block;
  return _react.default.createElement("textarea", newProps);
};

var _default = (0, _styledComponents.default)(TextArea).withConfig({
  displayName: "TextArea",
  componentId: "sc-8to6ra-0"
})(["", " ", ";"], _Mixins.borderedInput, (0, _Helpers.block)(24));

exports.default = _default;
//# sourceMappingURL=TextArea.js.map