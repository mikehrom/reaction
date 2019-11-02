"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconDrag = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconDrag = function IconDrag(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? "white" : _ref$color,
      _ref$background = _ref.background,
      background = _ref$background === void 0 ? "black" : _ref$background;
  return _react.default.createElement("svg", {
    className: "IconDrag",
    x: "0px",
    y: "0px",
    viewBox: "0 0 30 30",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("g", {
    transform: "translate(-1062.000000, -935.000000)"
  }, _react.default.createElement("g", {
    transform: "translate(1062.000000, 934.000000)"
  }, _react.default.createElement("g", {
    transform: "translate(0.785741, 0.701007)"
  }, _react.default.createElement("circle", {
    fill: background,
    cx: "14.5",
    cy: "15",
    r: "14.5"
  }), _react.default.createElement("g", {
    transform: "translate(10.000000, 6.500000)",
    strokeWidth: "2",
    stroke: color
  }, _react.default.createElement("polyline", {
    fill: background,
    transform: "translate(4.500000, 4.923718) rotate(-45.000000) translate(-4.500000, -4.923718)",
    points: "1.5 1.92371784 7.5 1.92371784 7.5 7.92371784"
  }), _react.default.createElement("polyline", {
    fill: background,
    transform: "translate(4.500000, 12.227216) rotate(-225.000000) translate(-4.500000, -12.227216)",
    points: "1.5 9.2272156 7.5 9.2272156 7.5 15.2272156"
  }), _react.default.createElement("path", {
    d: "M4.5,1.98457492 L4.5,16.0089159"
  }))))));
};

exports.IconDrag = IconDrag;
//# sourceMappingURL=IconDrag.js.map