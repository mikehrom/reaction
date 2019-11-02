"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconEditVideo = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconEditVideo = function IconEditVideo(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? "45px" : _ref$width;
  return _react.default.createElement("svg", {
    className: "edit-video",
    x: "0px",
    y: "0px",
    width: width,
    viewBox: "0 0 1000 1000",
    enableBackground: "new 0 0 1000 1000",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M57.9,225.9v559.2h887.1V225.9H57.9z M385.7,634.7V358l239.6,138.3L385.7,634.7z"
  }));
};

exports.IconEditVideo = IconEditVideo;
//# sourceMappingURL=IconEditVideo.js.map