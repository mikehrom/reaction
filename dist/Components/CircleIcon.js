"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

require("../Assets/Fonts");

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n  border-radius: 50%;\n  vertical-align: text-bottom;\n  display: inline-flex;\n  align-item: center;\n  justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CircleIconContainer = _styledComponents.default.div(_templateObject(), function (props) {
  return props.fontSize || "24px";
}, function (props) {
  return props.fontSize || "24px";
}, function (props) {
  return props.color || "purple";
});

var CircleIcon = function CircleIcon(props) {
  // TODO: refactor this to be less messy and easier to type
  var _ref = props,
      ref = _ref.ref,
      reminderProps = _objectWithoutProperties(_ref, ["ref"]);

  return _react.default.createElement(CircleIconContainer, reminderProps, _react.default.createElement(_Icon.default, _extends({}, reminderProps, {
    color: "white",
    fontSize: "".concat(parseInt(props.fontSize || "24px", 10) * (props.ratio || 0.55), "px"),
    style: {
      margin: 0,
      alignSelf: "center"
    }
  })));
};

var _default = CircleIcon;
exports.default = _default;
//# sourceMappingURL=CircleIcon.js.map