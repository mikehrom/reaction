"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconImageSet = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconImageSet = function IconImageSet(props) {
  return _react.default.createElement("svg", {
    className: "image-set",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 44 44"
  }, _react.default.createElement("path", {
    d: "M6760.67,551.72h-32v-32h32v32Zm-30-2h28v-28h-28v28Z",
    transform: "translate(-6728.67 -507.72)",
    fill: props.color
  }), _react.default.createElement("polygon", {
    points: "38 37 36 37 36 8 7 8 7 6 38 6 38 37",
    fill: props.color
  }), _react.default.createElement("polygon", {
    points: "44 31 42 31 42 2 13 2 13 0 44 0 44 31",
    fill: props.color
  }));
};

exports.IconImageSet = IconImageSet;
IconImageSet.defaultProps = {
  color: "black"
};
//# sourceMappingURL=IconImageSet.js.map