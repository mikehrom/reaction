"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconHeroVideo = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconHeroVideo = function IconHeroVideo(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? "45px" : _ref$width;
  return _react.default.createElement("svg", {
    className: "hero-video",
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
    d: "M0,0v31h81V0H0z M36,21.3V10l8.7,5.7L36,21.3z"
  }));
};

exports.IconHeroVideo = IconHeroVideo;
//# sourceMappingURL=IconHeroVideo.js.map