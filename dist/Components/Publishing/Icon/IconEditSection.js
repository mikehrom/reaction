"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconEditSection = void 0;

require("core-js/modules/es6.array.fill");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconEditSection = function IconEditSection(_ref) {
  var isClosing = _ref.isClosing,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? "45px" : _ref$width,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? "black" : _ref$fill;
  return _react.default.createElement("svg", {
    className: "edit-section",
    x: "0px",
    y: "0px",
    width: width,
    viewBox: "0 0 1000 1000",
    enableBackground: "0 0 1000 1000",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("rect", {
    x: "158",
    y: "304",
    fill: "#FFF",
    strokeMiterlimit: "10",
    width: "436",
    height: "399"
  }), isClosing ? _react.default.createElement("path", {
    fill: fill,
    d: "M379.318,132.208c-194.157,0-355.33,163.644-355.33,359.888s161.173,359.888,355.33,359.888 c42.962,0,213.011-0.984,571.915-359.888C592.329,133.192,422.28,132.208,379.318,132.208z M527.73,451.989v71.963l-311.841,0 v-71.963L527.73,451.989z"
  }) : _react.default.createElement("path", {
    fill: fill,
    d: "M379.318,132.208c-194.157,0-355.33,163.644-355.33,359.888s161.173,359.888,355.33,359.888 c42.962,0,213.011-0.984,571.915-359.888C592.329,133.192,422.28,132.208,379.318,132.208z M407.791,523.952V643.89h-71.963V523.952 H215.889v-71.963h119.939V332.05h71.963v119.939H527.73v71.963H407.791z"
  }));
};

exports.IconEditSection = IconEditSection;
//# sourceMappingURL=IconEditSection.js.map