"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconVideoPause = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "26",
    height: "28",
    viewBox: "0 0 26 28"
  }, _react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(-19 -22)"
  }, _react.default.createElement("rect", {
    width: "1200",
    height: "92",
    stroke: "#FFF",
    rx: "4"
  }), _react.default.createElement("path", {
    d: "M17 21h30v30H17z"
  }), _react.default.createElement("path", {
    fill: props.color,
    d: "M19.857 22.429h8.571v27.143h-8.571zM35.571 22.429h8.571v27.143h-8.571z"
  })));
};

Icon.defaultProps = {
  color: "black"
};
var IconVideoPause = (0, _styledComponents.default)(Icon).attrs({
  suppressClassNameWarning: true
}).withConfig({
  displayName: "IconVideoPause",
  componentId: "sc-1re9bgg-0"
})(["width:32px;height:32px;"]);
exports.IconVideoPause = IconVideoPause;
//# sourceMappingURL=IconVideoPause.js.map