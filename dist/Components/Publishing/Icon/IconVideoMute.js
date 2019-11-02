"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconVideoMute = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30px",
    height: "30px"
  }, _react.default.createElement("g", {
    fill: props.color
  }, _react.default.createElement("path", {
    d: "M19.1285714,15.3428571 L19.1285714,28.7571429 L11.8285714,21.4714286 L0.757142857,21.4714286 L0.757142857,8.04285714 L11.8285714,8.04285714 L19.1285714,0.757142857 L19.1285714,15.3428571 Z"
  })));
};

Icon.defaultProps = {
  color: "black"
};
var IconVideoMute = (0, _styledComponents.default)(Icon).attrs({
  suppressClassNameWarning: true
}).withConfig({
  displayName: "IconVideoMute",
  componentId: "skvw1c-0"
})(["width:32px;height:32px;"]);
exports.IconVideoMute = IconVideoMute;
//# sourceMappingURL=IconVideoMute.js.map