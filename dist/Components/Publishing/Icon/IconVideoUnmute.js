"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconVideoUnmute = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30px",
    height: "30px",
    viewBox: "0 0 30 30"
  }, _react.default.createElement("g", {
    fill: props.color
  }, _react.default.createElement("polygon", {
    points: "29.5142857 28 19.1285714 17.6142857 9.55714286 8.04285714 1.51428571 0 0 1.51428571 6.52857143 8.04285714 0.757142857 8.04285714 0.757142857 21.4714286 11.8285714 21.4714286 19.1285714 28.7571429 19.1285714 20.6428571 28 29.5142857"
  }), _react.default.createElement("polygon", {
    points: "19.1285714 0.757142857 11.8285714 8.04285714 11.8285714 8.04285714 19.1285714 15.3428571"
  })));
};

Icon.defaultProps = {
  color: "black"
};
var IconVideoUnmute = (0, _styledComponents.default)(Icon).attrs({
  suppressClassNameWarning: true
}).withConfig({
  displayName: "IconVideoUnmute",
  componentId: "sc-1ib1vo8-0"
})(["width:32px;height:32px;"]);
exports.IconVideoUnmute = IconVideoUnmute;
//# sourceMappingURL=IconVideoUnmute.js.map