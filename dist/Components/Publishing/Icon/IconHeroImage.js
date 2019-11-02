"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconHeroImage = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconHeroImage = function IconHeroImage(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? "45px" : _ref$width;
  return _react.default.createElement("svg", {
    className: "hero-image",
    x: "0px",
    y: "0px",
    width: width,
    viewBox: "0 0 81 51.9",
    enableBackground: "new 0 0 81 51.9",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("g", null, _react.default.createElement("polyline", {
    points: "24,39 54,39 54,37 24,37 \t"
  }), _react.default.createElement("polyline", {
    points: "24,44 54,44 54,42 24,42 \t"
  }), _react.default.createElement("polyline", {
    points: "24,49 48,49 48,47 24,47 \t"
  })), _react.default.createElement("path", {
    d: "M0,0v31h81V0H0z M31.2,10.2c0-1.2,1-2.1,2.1-2.1c1.2,0,2.1,1,2.1,2.1s-1,2.1-2.1,2.1C32.2,12.4,31.2,11.4,31.2,10.2z M32.1,25l7.6-9.5l2.7,2.8l2.1-1.1l4.9,7.8H32.1z"
  }));
};

exports.IconHeroImage = IconHeroImage;
//# sourceMappingURL=IconHeroImage.js.map