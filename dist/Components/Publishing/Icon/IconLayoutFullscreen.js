"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconLayoutFullscreen = void 0;

require("core-js/modules/es6.array.fill");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconLayoutFullscreen = function IconLayoutFullscreen(_ref) {
  var fill = _ref.fill;
  return _react.default.createElement("svg", {
    className: "layout-fullscreen",
    width: "45px",
    height: "30px",
    viewBox: "0 0 45 30",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("g", {
    className: "layout-fullscreen-group",
    fill: fill ? fill : (0, _palette.color)("black100")
  }, _react.default.createElement("path", {
    d: "M0,0 L45,0 L45,30 L0,30 L0,0 Z M3,22 L37,22 L37,20 L3,20 L3,22 Z M3,27 L29,27 L29,25 L3,25 L3,27 Z"
  }))));
};

exports.IconLayoutFullscreen = IconLayoutFullscreen;
//# sourceMappingURL=IconLayoutFullscreen.js.map