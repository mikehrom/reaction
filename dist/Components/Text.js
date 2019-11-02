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

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var fonts = _interopRequireWildcard(require("../Assets/Fonts"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var textSizesForPrimaryStyle = {
  xlarge: "24px",
  large: "17px",
  medium: "15px",
  small: "13px",
  xsmall: "11px"
};
var textSizesForSecondaryStyle = {
  xlarge: "26px",
  large: "20px",
  medium: "17px",
  small: "15px",
  xsmall: "11px"
};
var TextStyleToTextSize = {
  primary: textSizesForPrimaryStyle,
  secondary: textSizesForSecondaryStyle
};
var textStyleNameToCss = {
  primary: fonts.avantgarde("s11"),
  secondary: fonts.garamond("s11")
};

var RawText = function RawText(props) {
  var textSize = props.textSize,
      textStyle = props.textStyle,
      align = props.align,
      color = props.color,
      remainderProps = _objectWithoutProperties(props, ["textSize", "textStyle", "align", "color"]);

  return _react.default.createElement("p", remainderProps, props.children);
};
/**
 * @deprecated in favor of our Design System Typography components in @artsy/palette
 * https://palette.artsy.net/tokens/typography
 */


var Text = (0, _styledComponents.default)(RawText).withConfig({
  displayName: "Text",
  componentId: "nwxb9m-0"
})(["", ";font-size:", ";text-align:", ";color:", ";"], function (props) {
  return textStyleNameToCss[props.textStyle];
}, function (props) {
  return TextStyleToTextSize[props.textStyle][props.textSize];
}, function (props) {
  return props.align;
}, function (props) {
  return props.color;
});
Text.defaultProps = {
  textSize: "small",
  textStyle: "secondary",
  align: "start",
  color: "currentcolor"
};
var _default = Text;
exports.default = _default;
//# sourceMappingURL=Text.js.map