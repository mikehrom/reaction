"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconRemove = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconRemove = function IconRemove(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? "white" : _ref$color,
      _ref$background = _ref.background,
      background = _ref$background === void 0 ? "black" : _ref$background;
  return _react.default.createElement("svg", {
    className: "remove",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1000 1000",
    enableBackground: "new 0 0 1000 1000"
  }, _react.default.createElement("circle", {
    cx: "500.937",
    cy: "489.704",
    r: "468.769",
    fill: background
  }), _react.default.createElement("polygon", {
    fill: color,
    points: "485.251,550.605 374.762,661.094 308.487,594.819 418.976,484.33 308.487,373.84 374.762,307.565 485.251,418.055 595.741,307.565 662.016,373.84 551.526,484.33 662.016,594.819 595.741,661.094 "
  }));
};

exports.IconRemove = IconRemove;
//# sourceMappingURL=IconRemove.js.map