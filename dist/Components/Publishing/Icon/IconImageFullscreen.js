"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconImageFullscreen = void 0;

require("core-js/modules/es6.array.fill");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconImageFullscreen = function IconImageFullscreen(_ref) {
  var _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? "black" : _ref$fill;
  return _react.default.createElement("svg", {
    className: "image-fullscreen",
    width: "38px",
    height: "22px",
    viewBox: "0 0 38 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("rect", {
    fill: fill,
    fillRule: "nonzero",
    x: "0",
    y: "0",
    width: "38",
    height: "22"
  }), ">"));
};

exports.IconImageFullscreen = IconImageFullscreen;
//# sourceMappingURL=IconImageFullscreen.js.map