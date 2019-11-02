"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

var _Fonts = require("../Assets/Fonts");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Helpers = require("./Helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var titleSizes = {
  xxsmall: "s15",
  small: "s23",
  medium: "s30",
  large: "s37",
  xlarge: "s50"
  /**
   * @deprecated in favor of our Design System Typography components in @artsy/palette
   * https://palette.artsy.net/tokens/typography
   */

};

var Title = function Title(props) {
  var newProps = _objectSpread({}, props);

  delete newProps.titleSize;
  return _react.default.createElement("div", newProps, props.children);
};

var StyledTitle = (0, _styledComponents.default)(Title).withConfig({
  displayName: "Title__StyledTitle",
  componentId: "sc-9fsem3-0"
})(["color:", ";margin:20px 0;", ";", ";"], function (props) {
  return props.color;
}, function (p) {
  return (0, _Fonts.garamond)(titleSizes[p.titleSize]);
}, _Helpers.media.sm(_templateObject(), titleSizes.small));
StyledTitle.defaultProps = {
  titleSize: "medium",
  color: "inherit"
};
var _default = StyledTitle;
exports.default = _default;
//# sourceMappingURL=Title.js.map