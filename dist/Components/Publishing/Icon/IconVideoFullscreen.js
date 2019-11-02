"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconVideoFullscreen = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 28 28",
    onClick: props.onClick,
    width: "32px",
    height: "32px",
    className: props.className
  }, _react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(-1151 -22)"
  }, _react.default.createElement("rect", {
    width: "1200",
    height: "92",
    stroke: props.color,
    rx: "4"
  }), _react.default.createElement("path", {
    d: "M1150 21h30v30h-30z"
  }), _react.default.createElement("g", {
    fill: "#FFF"
  }, _react.default.createElement("path", {
    d: "M1151 40h2v10h-2z"
  }), _react.default.createElement("path", {
    d: "M1161 48v2h-10v-2zM1161 22v2h-10v-2z"
  }), _react.default.createElement("path", {
    d: "M1153 32h-2V22h2z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M1179 32h-2V22h2z"
  }), _react.default.createElement("path", {
    d: "M1169 24v-2h10v2z"
  })), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M1169 50v-2h10v2z"
  }), _react.default.createElement("path", {
    d: "M1177 40h2v10h-2z"
  }))), _react.default.createElement("path", {
    fill: "#FFF",
    d: "M1157 28h16v16h-16z"
  })));
};

Icon.defaultProps = {
  color: "black"
};
var IconVideoFullscreen = (0, _styledComponents.default)(Icon).attrs({
  suppressClassNameWarning: true
}).withConfig({
  displayName: "IconVideoFullscreen",
  componentId: "sc-13sjm18-0"
})(["width:28px;height:28px;"]);
exports.IconVideoFullscreen = IconVideoFullscreen;
//# sourceMappingURL=IconVideoFullscreen.js.map