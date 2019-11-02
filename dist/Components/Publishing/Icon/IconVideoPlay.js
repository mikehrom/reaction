"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconVideoPlay = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  return _react.default.createElement("svg", {
    x: "0px",
    y: "0px",
    viewBox: "0 0 40 56",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    className: props.className
  }, _react.default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("polygon", {
    fill: props.color,
    points: "0 0 0 56 39.3600006 28"
  })));
};

Icon.defaultProps = {
  color: "black"
};
var IconVideoPlay = (0, _styledComponents.default)(Icon).attrs({
  suppressClassNameWarning: true
}).withConfig({
  displayName: "IconVideoPlay",
  componentId: "sc-1q2i1i-0"
})(["width:32px;height:32px;"]);
exports.IconVideoPlay = IconVideoPlay;
//# sourceMappingURL=IconVideoPlay.js.map