"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconLayoutSplit = void 0;

require("core-js/modules/es6.array.fill");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconLayoutSplit = function IconLayoutSplit(_ref) {
  var fill = _ref.fill;
  return _react.default.createElement("svg", {
    className: "layout-split",
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
    className: "layout-split-group",
    fill: fill ? fill : (0, _palette.color)("black100")
  }, _react.default.createElement("g", null, _react.default.createElement("polyline", {
    points: "0 2 20 2 20 0 0 0"
  }), _react.default.createElement("polyline", {
    points: "0 7 20 7 20 5 0 5"
  }), _react.default.createElement("polyline", {
    points: "0 12 16 12 16 10 0 10"
  }), _react.default.createElement("rect", {
    x: "25",
    y: "0",
    width: "20",
    height: "30"
  })))));
};

exports.IconLayoutSplit = IconLayoutSplit;
//# sourceMappingURL=IconLayoutSplit.js.map