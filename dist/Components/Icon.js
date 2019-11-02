"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.function.name");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

require("../Assets/Fonts");

var _Icons = _interopRequireDefault(require("../Assets/Icons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Icon = function Icon(_ref) {
  var _color = _ref.color,
      font = _ref.font,
      fontSize = _ref.fontSize,
      name = _ref.name,
      props = _objectWithoutProperties(_ref, ["color", "font", "fontSize", "name"]);

  return _react.default.createElement("div", props, _Icons.default[name]);
};

var _default = (0, _styledComponents.default)(Icon).withConfig({
  displayName: "Icon",
  componentId: "sc-13f8sed-0"
})(["font-family:", ";color:", ";font-size:", ";margin:0 5px;display:inline-block;letter-spacing:0;position:relative;", ";", ";", ";", ";", ";", ";"], function (props) {
  return props.font || "artsy-icons";
}, function (props) {
  return props.color || "purple";
}, function (props) {
  return props.fontSize || "24px";
}, _styledSystem.bottom, _styledSystem.color, _styledSystem.left, _styledSystem.right, _styledSystem.space, _styledSystem.top);

exports.default = _default;
//# sourceMappingURL=Icon.js.map