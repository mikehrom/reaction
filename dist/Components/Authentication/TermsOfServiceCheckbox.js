"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TermsOfServiceCheckbox = void 0;

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var _Checkbox = _interopRequireDefault(require("../Checkbox"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TermsOfServiceCheckbox = function TermsOfServiceCheckbox(_ref) {
  var error = _ref.error,
      name = _ref.name,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ["error", "name", "onChange", "onBlur", "value"]);

  var color = error && !value ? "red100" : "black60";
  return _react.default.createElement(StyledCheckbox, {
    checked: value,
    error: error,
    onChange: onChange,
    onBlur: onBlur,
    name: name
  }, _react.default.createElement(_palette.Serif, {
    color: color,
    size: "3t",
    ml: 0.5
  }, "I agree to Artsy’s ", _react.default.createElement(_palette.Link, {
    href: "https://www.artsy.net/terms",
    target: "_blank",
    color: color
  }, "Terms of Use"), " and ", _react.default.createElement(_palette.Link, {
    href: "https://www.artsy.net/privacy",
    target: "_blank",
    color: color
  }, "Privacy Policy"), ", and to receive emails from Artsy."));
};

exports.TermsOfServiceCheckbox = TermsOfServiceCheckbox;
var StyledCheckbox = (0, _styledComponents.default)(_Checkbox.default).withConfig({
  displayName: "TermsOfServiceCheckbox__StyledCheckbox",
  componentId: "t5we0o-0"
})(["margin:5px 0;align-items:flex-start;"]);
//# sourceMappingURL=TermsOfServiceCheckbox.js.map