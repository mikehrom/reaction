"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = void 0;

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var railStyles = (0, _styledComponents.css)(["width:100%;height:2px;background-color:", ";"], (0, _palette.color)("black30"));
var knobStyles = (0, _styledComponents.css)(["user-select:none;cursor:pointer;width:", "px;height:", "px;border-radius:20px;background-color:", ";"], (0, _palette.space)(2), (0, _palette.space)(2), (0, _palette.color)("white100"));

var StyledSlider = _styledComponents.default.input.withConfig({
  displayName: "LightboxSlider__StyledSlider",
  componentId: "sc-2u6frb-0"
})(["appearance:none;width:100%;background:transparent;margin:0 ", "px;&::-webkit-slider-thumb{-webkit-appearance:none;margin-top:-9px;", "}&::-moz-range-thumb{", ";}&::-ms-thumb{", ";}&::-ms-track{background:transparent;border-color:transparent;color:transparent;", ";}&::-webkit-slider-runnable-track{", ";}&::-moz-range-track{", ";}&::-moz-focus-outer{border:0;}&::-ms-fill-lower{", ";}&::-ms-fill-upper{", ";}&:invalid{box-shadow:none;}&:focus{outline:none;}"], (0, _palette.space)(1), knobStyles, knobStyles, knobStyles, railStyles, railStyles, railStyles, railStyles, railStyles);

StyledSlider.defaultProps = {
  type: "range"
};

var SliderContainer = _styledComponents.default.div.withConfig({
  displayName: "LightboxSlider__SliderContainer",
  componentId: "sc-2u6frb-1"
})(["width:240px;height:50px;border-radius:2px;background-color:rgba(0,0,0,0.6);padding:", "px;"], (0, _palette.space)(1));

var ZoomSymbolContainer = _styledComponents.default.svg.withConfig({
  displayName: "LightboxSlider__ZoomSymbolContainer",
  componentId: "sc-2u6frb-2"
})(["height:32px;width:32px;padding:", "px;flex-shrink:0;cursor:pointer;"], (0, _palette.space)(1));

var ZoomOutButton = function ZoomOutButton(props) {
  return _react.default.createElement(ZoomSymbolContainer, props, _react.default.createElement("line", {
    x1: "0",
    y1: "50%",
    x2: "100%",
    y2: "50%",
    stroke: (0, _palette.color)("white100"),
    strokeWidth: "2px"
  }));
};

var ZoomInButton = function ZoomInButton(props) {
  return _react.default.createElement(ZoomSymbolContainer, props, _react.default.createElement("line", {
    x1: "50%",
    y1: "0",
    x2: "50%",
    y2: "100%",
    stroke: (0, _palette.color)("white100"),
    strokeWidth: "2px"
  }), _react.default.createElement("line", {
    x1: "0",
    y1: "50%",
    x2: "100%",
    y2: "50%",
    stroke: (0, _palette.color)("white100"),
    strokeWidth: "2px"
  }));
};

var Slider = function Slider(props) {
  return _react.default.createElement(SliderContainer, null, _react.default.createElement(_palette.Flex, {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  }, _react.default.createElement(ZoomOutButton, {
    onClick: props.onZoomOutClicked
  }), _react.default.createElement(StyledSlider, {
    min: props.min.toString(),
    max: props.max.toString(),
    step: props.step.toString(),
    onChange: props.onChange,
    ref: function ref(element) {
      return element && (element.value = props.value);
    }
  }), _react.default.createElement(ZoomInButton, {
    onClick: props.onZoomInClicked
  })));
};

exports.Slider = Slider;
//# sourceMappingURL=LightboxSlider.js.map