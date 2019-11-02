"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconLayoutBasic = void 0;

require("core-js/modules/es6.array.fill");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconLayoutBasic = function IconLayoutBasic(_ref) {
  var fill = _ref.fill;
  return _react.default.createElement("svg", {
    className: "layout-basic",
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
    className: "layout-basic-group",
    fill: fill ? fill : (0, _palette.color)("black100")
  }, _react.default.createElement("polyline", {
    points: "6 25 40 25 40 23 6 23"
  }), _react.default.createElement("polyline", {
    points: "10 30 36 30 36 28 10 28"
  }), _react.default.createElement("rect", {
    x: "0",
    y: "0",
    width: "45",
    height: "20"
  }))));
};

exports.IconLayoutBasic = IconLayoutBasic;
//# sourceMappingURL=IconLayoutBasic.js.map